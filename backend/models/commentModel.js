const { Schema, model } = require('mongoose')
const commentModel = new Schema({
    articleId: {
        type: String,
        required: true
    },
    commentText: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
        required: true
    },
    replyComment: [{
        replyName: {
            type: String,
            required: true
        },
        replyImage: {
            type: String,
            required: true
        },
        replyTime: {
            type: String,
            required: true
        },
        replyText: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true })
module.exports = model('comment', commentModel)