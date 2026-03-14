const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST /api/book-slot
router.post('/book-slot', bookingController.createBooking);

// GET /api/bookings
router.get('/bookings', bookingController.getBookings);

// PATCH /api/bookings/:id
router.patch('/bookings/:id', bookingController.updateBookingStatus);

module.exports = router;
