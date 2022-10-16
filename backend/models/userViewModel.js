const { model, Schema } = require('mongoose');

const userViewSchema = new Schema({
    viewer: {
        type: Number,
        default: 0
    },
    year: {
        type: Number,
        required: true
    },
    uniqeViewer: {
        type: Array,
        default: []
    },
    monthArray: [
        {
            month: {
                type: Number,
                default: 1
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 2
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 3
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 4
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 5
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 6
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 7
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 8
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 9
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 10
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 11
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
        {
            month: {
                type: Number,
                default: 12
            },
            viewer: {
                type: Number,
                default: 0
            },
            uniqeViewer: []
        },
    ]
}, { timestamps: true })

module.exports = model('userView', userViewSchema)