const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const notificationSchema = new Schema(
    {
        noteContent: {
            type: String,
            required: true
        },
        createdBy: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        lat: {
            type: String,
            required: false
        },
        long: {
            type: String,
            required: false
        },
        postId: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Notification = model('Notification', notificationSchema);

module.exports = Notification;
