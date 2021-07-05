import React from 'react';
import { useParams } from 'react-router-dom';

import ReplyList from '../../components/ReplyList';
import ReplyForm from '../../components/ReplyForm';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POST } from "../../utils/queries";

const SinglePost = props => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId }
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Paper>
      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
      </Grid>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.username}
          </span>{' '}
          post on {post.createdAt}
        </p>
        <div className="card-body">
          <p>{post.postContent}</p>
        </div>
      </div>

      {post.replyCount > 0 && <ReplyList replies={post.replies} />}

      {Auth.loggedIn() && <ReplyForm postId={post._id} />}
    </Paper>
  );
};

export default SinglePost;