const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Stat = require('./models/Stat');

dotenv.config();

const seedStats = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for seeding stats...');

    // Delete existing stats to force a clean start
    await Stat.deleteMany({});
    console.log('Cleared existing stats.');

    // Create a new singleton with 100 and 3
    const stats = new Stat({
      isSingleton: true,
      happyPets: 100,
      expertGroomers: 3,
      premiumCare: "24/7",
      safetyRate: 100
    });

    await stats.save();
    console.log('Stats seeded successfully with 100 Happy Pets and 3 Expert Groomers!');
    process.exit();
  } catch (error) {
    console.error('Error seeding stats:', error);
    process.exit(1);
  }
};

seedStats();
