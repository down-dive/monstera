const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Notification } = require('../models');
const { update } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('posts')
                    .populate('friends');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        // get all posts
        posts: async (parent, { username }, context) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        // get a single post by id
        post: async (parent, { _id }) => {
            return Post.findOne({ _id });
        },
        // get notifications for specific user
        notification: async (parent, args, context) => {
            console.log(context.user);
            if (context.user) {
                const userData = await User.findOne({ username: context.user.username })
                    .select('-__v');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('posts');
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('posts')
                .populate('notifications');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id } },
                    { new: true }
                );
                
                if (args.sos) {
                    // create a notification
                    const notificationObj = {
                        noteContent: "I am in danger!",
                        createdBy:  context.user._id,
                        lat: args.lat ? args.lat : null,
                        long: args.long ? args.long : null,
                    }

                    const notification = await Notification.create(notificationObj);
                    const user = await User.findById(context.user._id);
                    const friends = user.friends;
                    // loop over list of friends, and update with notification id
                    for (var i = 0; i < friends.length; i++) {
                        var friend = friends[i];
                        console.log(notification);
                        const user = await User.findByIdAndUpdate(
                            { _id: friend},
                            { $push: { notifications: notification._id} },
                            { new: true }
                        );
                    }
                }
                return post;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addNotification: async (_parent,_args, context) => {
            if (context.user) {
                var friends = context.user.friends;
                var notifications = [];
                var success = false;
                for(var i = 0; i < friends.length; i++) {
                  var friend = friends[i];
                   var  notificationObj = {
                       noteContent: "I am in danger!", 
                       createBy: context.user._id, 
                       notificationTo: friend
                   }
                   notifications.push(notificationObj);
                }
                
                try {
                 var note = await Notification.insertMany(notifications);
                 success = true;
                } catch(e) {
                    console.log("err", e)
                    success = false;
                }
        

                return {successful: success};
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addReply: async (parent, { postId, replyContent}, context) => {
            if(context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { replies: { replyContent, username: context.user.username } } },
                    { new: true, runValidators: true}
                );

                return updatedPost;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        deletePost: async (parent, { postId }, context) => {
            if (context.user) {
                const post = await Post.findByIdAndDelete({ _id: postId });
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { posts: postId } },
                    { new: true }
                ).populate('posts');
                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        deleteFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        deleteNotification: async (parent, { notificationId }, context) => {
            if (context.user) {
                // console.log('I am context.user', context.user);
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { friends: notificationId } },
                    { new: true }
                ).populate('notifications');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        deleteReply: async (parent, { replyId }, context) => {
            if(context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { username: context.user.username },
                    { $pull: { replies: {_id: replyId} }},
                    { new: true }
                ).populate('replies');

                return updatedPost;
            }

            throw new AuthenticationError('You need to be logged in!');
        }

    }
};

module.exports = resolvers;