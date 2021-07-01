const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
       postContent: {
           type: String,
           required: 'You need to leave a post!',
           minlength: 1
       },
       createdAt: {
           type: Date,
           default: Date.now,
           get: timestamp => dateFormat(timestamp)
       },
       username: {
           type: String,
           required: true
       },
       replies: [replySchema],
       sos: {
           type: Boolean,
           required: false
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

postSchema.virtual('replyCount').get(function() {
    return this.replies.length;
});

const Post = model('Post', postSchema);
module.exports = Post;