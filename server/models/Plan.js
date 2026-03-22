const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Plan name is required'],
    unique: true
  },
  description: String,
  priceMonthly: {
    type: Number,
    required: true
  },
  priceYearly: {
    type: Number,
    required: true
  },
  features: [String],
  icon: String, // lucide icon name
  active: {
    type: Boolean,
    default: true
  }
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
