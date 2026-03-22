const Razorpay = require('razorpay');
const crypto = require('crypto');
const User = require('../models/User');
const Plan = require('../models/Plan');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createSubscriptionOrder = async (req, res) => {
  try {
    const { planId, billingCycle } = req.body; // billingCycle: 'monthly' or 'yearly'
    const plan = await Plan.findById(planId);

    if (!plan) {
      return res.status(404).json({ status: 'fail', message: 'Plan not found' });
    }

    const amount = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

    const options = {
      amount: amount * 100, // in paise
      currency: "INR",
      receipt: `sub_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      status: 'success',
      order
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.verifySubscriptionPayment = async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      planId,
      billingCycle
    } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment verified
      const plan = await Plan.findById(planId);
      const durationDays = billingCycle === 'yearly' ? 365 : 30;
      
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + durationDays);

      await User.findByIdAndUpdate(req.user._id, {
        subscription: {
          planId,
          startDate: new Date(),
          expiryDate,
          status: 'active'
        }
      });

      res.status(200).json({
        status: 'success',
        message: "Subscription activated successfully"
      });
    } else {
      res.status(400).json({
        status: 'fail',
        message: "Invalid signature"
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
