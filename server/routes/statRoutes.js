const express = require('express');
const router = express.Router();
const statController = require('../controllers/statController');

// GET /api/stats
router.get('/', statController.getStats);

// POST /api/stats/update
router.post('/update', statController.updateStat);

module.exports = router;
