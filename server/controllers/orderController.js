const Order = require('../models/Order');

// Create order after successful payment
exports.createOrder = async (req, res) => {
  try {
    const { items, address, totalAmount, razorpay_order_id, razorpay_payment_id } = req.body;

    const order = await Order.create({
      userId: req.user._id,
      items,
      address,
      totalAmount,
      razorpay_order_id,
      razorpay_payment_id,
      deliveryStatus: 'processing'
    });

    res.status(201).json({ status: 'success', order });
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

// Get all orders (admin)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId', 'name email phone')
      .sort({ createdAt: -1 });

    res.status(200).json({ status: 'success', orders });
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ status: 'fail', message: err.message });
  }
};

// Get orders for logged-in user
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ status: 'success', orders });
  } catch (err) {
    res.status(500).json({ status: 'fail', message: err.message });
  }
};

// Update delivery status (admin)
exports.updateDeliveryStatus = async (req, res) => {
  try {
    const { deliveryStatus } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { deliveryStatus },
      { new: true, runValidators: true }
    ).populate('userId', 'name email phone');

    if (!order) {
      return res.status(404).json({ status: 'fail', message: 'Order not found' });
    }

    res.status(200).json({ status: 'success', order });
  } catch (err) {
    console.error('Error updating delivery status:', err);
    res.status(400).json({ status: 'fail', message: err.message });
  }
};
