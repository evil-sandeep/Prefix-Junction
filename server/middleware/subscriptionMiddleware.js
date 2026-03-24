const User = require('../models/User');

const checkSubscription = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ status: 'fail', message: 'User not found' });
    }

    // Check if subscription has expired
    if (user.plan !== 'Starter' && user.planExpiryDate && new Date() > user.planExpiryDate) {
      // Use updateOne to bypass pre-save hook (avoids 'next is not a function' error)
      await User.updateOne(
        { _id: user._id },
        {
          $set: {
            plan: 'Starter',
            'subscription.status': 'expired'
          }
        }
      );
      console.log(`User ${user.email} subscription expired. Downgraded to Starter.`);
    }

    next();
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

module.exports = checkSubscription;
