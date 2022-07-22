const { Schema, model } = require('mongoose');

const articleSchema = new Schema({

    adminId: {
        type: String,
        required: true
    },
    adminName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    category_slug: {
        type: String,
        required: true
    },
    tag_slug: {
        type: String,
        required: true
    },
    articleText: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    },
    like_dislike: [
        {
            like_disliker_id: {
                type: String,
            },
            like_or_dislike: {
                type: String,
                default: ''
            }
        }
    ],
    viewer: {
        type: Number,
        default: 0
    },
    viewerIp: [
        {
            ip: {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true });

module.exports = model('article', articleSchema);