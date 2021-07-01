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
    },
    Mutation: {

    }
};

module.exports = resolvers;