const router = require('express').Router();
const { auth_user } = require('../../middleware/authMiddleware')
const { user_comment, get_user_comment,comment_reply} = require('../../controller/home/homeCommentController')
router.post('/home/user-comment', auth_user, user_comment);
router.get('/get-home-comment/:articleId', get_user_comment)
router.post('/comment-reply', auth_user,comment_reply)
module.exports = router;