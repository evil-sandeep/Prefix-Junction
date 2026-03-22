const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const { protect } = require('../middleware/authMiddleware');
const checkSubscription = require('../middleware/subscriptionMiddleware');

router.post('/create-order', protect, checkSubscription, subscriptionController.createSubscriptionOrder);
router.post('/verify-payment', protect, subscriptionController.verifySubscriptionPayment);

module.exports = router;
