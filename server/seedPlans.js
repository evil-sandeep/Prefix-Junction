const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Plan = require('./models/Plan');

dotenv.config();

const plans = [
  {
    name: "Starter",
    description: "Perfect for a quick refresh and maintenance.",
    priceMonthly: 999,
    priceYearly: 799,
    features: [
      "Basic Bath & Brush",
      "Nail Trimming",
      "Ear Cleaning",
      "Standard Shampoo",
      "15 min Consultation"
    ],
    icon: "Zap"
  },
  {
    name: "Premium",
    description: "Our most popular choice for ultimate care.",
    priceMonthly: 1899,
    priceYearly: 1499,
    features: [
      "Full Styling & Haircut",
      "Deep Conditioning",
      "Teeth Brushing",
      "Medicated Shampoo",
      "30 min Expert Grooming",
      "Free Pet Taxi (5km)"
    ],
    icon: "Shield"
  },
  {
    name: "Elite",
    description: "The VIP experience for your furry family.",
    priceMonthly: 2999,
    priceYearly: 2499,
    features: [
      "Full Body Pampering",
      "Skin & Coat Treatment",
      "Paw Pad Therapy",
      "Luxury Spa Aromatherapy",
      "Priority Booking",
      "Monthly Health Report",
      "Unlimited Consultations"
    ],
    icon: "Crown"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB Connected for seeding');
    
    await Plan.deleteMany();
    console.log('Existing plans deleted');
    
    await Plan.insertMany(plans);
    console.log('Plans seeded successfully');
    
    process.exit();
  } catch (err) {
    console.error('Error seeding plans:', err);
    process.exit(1);
  }
};

seedDB();
