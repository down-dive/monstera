import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postContent: String!) {
    addPost(postContent: $postContent) {
      _id
      postContent
      createdAt
      username
      replyCount
      replies {
        _id
      }
    }
  }
`;

export const ADD_REPLIES = gql`
  mutation addReply($postId: ID!, $replyContent: String!) {
    addReply(postId: $postId, replyContent: $replyContent) {
      _id
      replyCount
      replies {
        _id
        replyContent
        createdAt
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation deleteFriend($friendId: ID!) {
    deleteFriend(friendId: $friendId) {
      _id
      username
      email
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_REPLY = gql`
  mutation deleteReply($replyId: ID!) {
    deleteReply(replyId: $replyId) {
      _id
      username
      replyCount
      createdAt
      replies {
        _id
        replyContent
        username
        createdAt
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation deletePost($postId: ID!) {
  deletePost(postId: $postId) {
    _id
    username
    posts {
      _id
      postContent
    }
  }
}
`;