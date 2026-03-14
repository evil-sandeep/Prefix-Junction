const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST /api/book-slot
router.post('/book-slot', bookingController.createBooking);

module.exports = router;
