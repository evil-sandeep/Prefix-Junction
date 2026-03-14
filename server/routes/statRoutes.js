const express = require('express');
const router = express.Router();
const statController = require('../controllers/statController');

// GET /api/stats
router.get('/', statController.getStats);

// PATCH /api/stats
router.patch('/', statController.updateStat);

module.exports = router;
