const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  planId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan',
    required: true
  },
  razorpay_order_id: {
    type: String,
    required: true
  },
  razorpay_payment_id: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'INR'
  },
  status: {
    type: String,
    enum: ['captured', 'failed', 'refunded'],
    default: 'captured'
  },
  billingCycle: {
    type: String,
    enum: ['monthly', 'yearly'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
