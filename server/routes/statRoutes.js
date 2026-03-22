const express = require('express');
const router = express.Router();
const statController = require('../controllers/statController');

const { protect } = require('../middleware/authMiddleware');
const restrictTo = require('../middleware/planMiddleware');

// GET /api/stats
router.get('/', protect, restrictTo('Elite'), statController.getStats);

// POST /api/stats/update
router.post('/update', protect, restrictTo('Elite'), statController.updateStat);

module.exports = router;
