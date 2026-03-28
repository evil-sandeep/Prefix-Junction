const mongoose = require('mongoose');

const StatSchema = new mongoose.Schema({
  happyPets: {
    type: Number,
    default: 100
  },
  expertGroomers: {
    type: Number,
    default: 3
  },
  premiumCare: {
    type: String,
    default: "24/7"
  },
  safetyRate: {
    type: Number,
    default: 100
  },
  // Singleton pattern helper
  isSingleton: {
    type: Boolean,
    default: true,
    unique: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Stat', StatSchema);
