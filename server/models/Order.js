const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String }
});

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [orderItemSchema],
  address: {
    fullName: String,
    phone: String,
    addressLine: String,
    city: String,
    state: String,
    pincode: String
  },
  totalAmount: { type: Number, required: true },
  razorpay_order_id: { type: String },
  razorpay_payment_id: { type: String },
  deliveryStatus: {
    type: String,
    enum: ['processing', 'out_for_delivery', 'delivered', 'cancelled'],
    default: 'processing'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
