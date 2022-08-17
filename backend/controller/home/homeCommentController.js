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
        console.log(error)
        res.status(500).json({
            errorMessage: {
                error: 'Internal server error'
            }
        })
    }

}