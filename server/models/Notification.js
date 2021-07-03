const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const notificationSchema = new Schema(
    {
        noteContent: {
            type: String,
            required: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User'
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
