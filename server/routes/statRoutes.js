const express = require('express');
const router = express.Router();
const statController = require('../controllers/statController');

const { protect } = require('../middleware/authMiddleware');
const restrictTo = require('../middleware/planMiddleware');

// GET /api/stats
router.get('/', statController.getStats);

// POST /api/stats/update
// Allowing both Elite plan users and Admins to update stats
router.post('/update', protect, (req, res, next) => {
  if (req.user.role === 'admin' || req.user.plan === 'Elite') {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: 'You do not have permission to update statistics. This requires an Elite plan or Admin access.'
    });
  }
}, statController.updateStat);

module.exports = router;
