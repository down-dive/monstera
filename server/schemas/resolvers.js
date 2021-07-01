const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user.username._id })
                .select('-__v -password')
                .populate('posts')
                .populate('friends');

            return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { _id }) => {
            return Post.findOne({ _id });
        },
        notification: async (parent, args, context) => {
            console.log(context.user);
            if (context.user) {
                const userData = await User.findOne({ username: context.user.username.username })
                .select('-__v');

            return userData;
            }

            throw new AuthenticationError('Not logged in');
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

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return {token, user };
        },
        addPost: async (parent, args, context) => {
            if (context.user) {
                // console.log('I am context.user', context.user);
                const post = await Post.create({...args, username: context.user.username.username });
                const user = await User.findByIdAndUpdate(
                    {_id: context.user.username._id},
                    { $push: {posts: post._id }},
                    { new: true }
                );
                return post;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
    }
};

module.exports = resolvers;