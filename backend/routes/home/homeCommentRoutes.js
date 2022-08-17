const router = require('express').Router();
const { auth_user } = require('../../middleware/authMiddleware')
const { user_comment } = require('../../controller/home/homeCommentController')
router.post('/home/user-comment', auth_user, user_comment)
module.exports = router;