const userViewModel = require('../../models/userViewModel')
const articleModel = require('../../models/articleModel')
const categoryModel = require('../../models/categoryModel')
const tagModel = require('../../models/tagModel')
const userModel = require('../../models/userModel')
const notificationModel = require('../../models/NotificationModel')
const date = require('date-and-time')
module.exports.get_dashboard_index_data = async (req, res) => {
    try {
        const time = date.format(new Date(), 'YYYY/MM/DD').split('/')
        const year = time[0]
        const userView = await userViewModel.findOne({ year })
        const articleCount = await articleModel.find({}).countDocuments();
        const categoryCount = await categoryModel.find({}).countDocuments();
        const tagCount = await tagModel.find({}).countDocuments();
        const subAdminCount = await userModel.find({ role: 'sub admin' }).countDocuments();

        return res.status(200).json({
            userView,
            articleCount,
            categoryCount,
            tagCount,
            subAdminCount
        })
    } catch (error) {
        res.status(500).json({
            errorMessage: {
                error: 'Internal server error'
            }
        })
    }
}

module.exports.get_notification = async (req, res) => {
    const { adminId, role } = req;
    try {
        if (role === 'admin') {
            const myNotification = await notificationModel.find({})
            return res.status(200).json({
                notification: myNotification
            })
        }
        if (role === 'sub admin') {
            const myNotification = await notificationModel.find({ adminId })
            return res.status(200).json({
                notification: myNotification
            })
        }
    } catch (error) {
        res.status(500).json({
            errorMessage: {
                error: 'Internal server error'
            }
        })
    }
}