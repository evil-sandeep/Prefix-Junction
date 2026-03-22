const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const checkSubscription = require('../middleware/subscriptionMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', protect, checkSubscription, authController.getMe);

module.exports = router;
