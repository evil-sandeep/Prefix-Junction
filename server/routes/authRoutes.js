const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const checkSubscription = require('../middleware/subscriptionMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/admin-login', authController.adminLogin);
router.get('/me', protect, checkSubscription, authController.getMe);

module.exports = router;
