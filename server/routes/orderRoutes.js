const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

// Protected routes (user must be logged in)
router.post('/', protect, orderController.createOrder);
router.get('/my-orders', protect, orderController.getMyOrders);

// Admin routes (no extra middleware since admin is verified by secret key on frontend)
router.get('/all', orderController.getAllOrders);
router.patch('/:id/status', orderController.updateDeliveryStatus);

module.exports = router;
