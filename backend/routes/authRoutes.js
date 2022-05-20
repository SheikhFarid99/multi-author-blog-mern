const router = require('express').Router();

const {admin_login} = require('../controller/authController');

router.post('/admin-login',admin_login);

module.exports = router;