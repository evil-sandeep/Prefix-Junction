const restrictTo = (...plans) => {
  return (req, res, next) => {
    // plans: ['Starter', 'Premium', 'Elite']
    if (!plans.includes(req.user.plan)) {
      return res.status(403).json({
        status: 'fail',
        message: 'You do not have permission to perform this action with your current plan.'
      });
    }
    next();
  };
};

module.exports = restrictTo;
