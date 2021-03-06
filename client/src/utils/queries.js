import gql from 'graphql-tag';

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postContent
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replyContent
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($_id: ID!) {
    post(_id: $_id) {
      _id
      postContent
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replyContent
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      posts {
        _id
        postContent
        createdAt
        replyCount
      }
      notifications {
        _id
        noteContent
        createdBy
        createdAt
        postId
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      posts {
        _id
        postContent
        createdAt
        replyCount
        replies {
          _id
          createdAt
          replyContent
          username
        }
      }
      friends {
        _id
        username
      }
      notifications {
        _id
        noteContent
        createdBy
        createdAt
        postId
        lat
        long
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  {
    users {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;