const commentModel = require('../../models/commentModel');
module.exports.user_comment = async (req, res) => {
    const {
        articleId,
        articleSlug,
        commentText,
        userName,
        userImage
    } = req.body;

    try {
        await commentModel.create({
            articleId,
            commentText,
            userName,
            userImage
        })
        res.status(201).json({
            successMessage: 'comment you'
        })
    } catch (error) {
        res.status(500).json({
            errorMessage: {
                error: 'Internal server error'
            }
        })
    }

}

module.exports.get_user_comment = async (req, res) => {
    const { articleId } = req.params;
    try {
        const getComment = await commentModel.find({ articleId })
        res.status(200).json({
            comment: getComment
        })
    } catch (error) {
        res.status(500).json({
            errorMessage: {
                error: 'Internal server error'
            }
        })
    }
}

module.exports.comment_reply = async (req, res) => {
    const {commentId,replyText,replyName,replyImage} = req.body
    const {role} = req ;
    try {
        await commentModel.updateOne({
            _id : commentId
        },{
            $push : {
                replyComment : {
                    replyText,
                    replyImage,
                    replyName : role === 'admin' ? 'Admin' : replyName,
                    replyTime : new Date()
                }
            }
        })
    } catch (error) {
        
    }
}