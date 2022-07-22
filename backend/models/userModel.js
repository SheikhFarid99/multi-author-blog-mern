const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    loginMethod: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    accessStatus: {
        type: String,
        default: 'unblock'
    }
}, { timestamps: true })

module.exports = model('user', userSchema)