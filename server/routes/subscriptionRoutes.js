const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create-order', authMiddleware, subscriptionController.createSubscriptionOrder);
router.post('/verify-payment', authMiddleware, subscriptionController.verifySubscriptionPayment);

module.exports = router;
