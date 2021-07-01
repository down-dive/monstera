const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        posts: [Post]
        friends: [User]
        friendCount: Int
        notifications: [Notification]
    }

    type Auth {
        token: ID
        user: User
    }

    type Post {
        _id: ID
        postContent: String
        createdAt: String
        username: String
        replyCount: Int 
        replies: [Reply]
    }

    type Reply {
        _id: ID
        replyContent: String
        username: String
        createdAt: String
    }
    
    type Notification {
        _id: ID
        noteContent: String
        username: String
        createdAt: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
        notification(username: String!): Notification
    }
`;

module.exports = typeDefs;