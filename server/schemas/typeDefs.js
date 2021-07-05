const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type NotificationConfirm {
        success: Boolean
    }
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
        sos: Boolean
        lat: String
        long: String
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
        createdBy: String
        createdAt: String
        postId: ID
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
        notification: Notification
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, zipCode: Int): Auth
        addPost(postContent: String!, sos: Boolean, lat: String, long: String): Post
        addFriend(friendId: ID!): User
        addNotification: NotificationConfirm
        addReply(postId: ID!, replyContent: String!): Post
        deletePost(postId: ID!): User
        deleteFriend(friendId: ID!): User
        deleteNotification(notificationId: ID!): User
        deleteReply(replyId: ID!): Post
    }
`;

module.exports = typeDefs;