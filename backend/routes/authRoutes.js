const router = require('express').Router();

const { admin_login, user_register, verify_email, user_login } = require('../controller/authController');

router.post('/admin-login', admin_login);
router.post('/user-register', user_register);
router.post('/verify-email', verify_email);
router.post('/user-login', user_login);

module.exports = router;