const Plan = require('../models/Plan');

exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ active: true });
    res.status(200).json({
      status: 'success',
      results: plans.length,
      data: {
        plans
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
