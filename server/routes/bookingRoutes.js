const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

// POST /api/book-slot
router.post('/book-slot', bookingController.createBooking);

// GET /api/bookings
router.get('/bookings', bookingController.getBookings);

// GET /api/my-bookings
router.get('/my-bookings', protect, bookingController.getMyBookings);

// PATCH /api/bookings/:id
router.patch('/bookings/:id', bookingController.updateBookingStatus);

module.exports = router;
