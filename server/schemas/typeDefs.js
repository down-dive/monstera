const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        zipCode: Int
        posts: [Post]
        friends: [User]
        friendCount: Int
        notifications: [Notification]
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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
        notification(username: String!): Notification
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, zipCode: Int): Auth
    }
`;

module.exports = typeDefs;