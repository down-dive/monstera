import React from 'react';
import { Link } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";


const PostList = ({ post, title }) => {
  // if (!post.length) {
  //   return <h3>No Posts Yet</h3>;
  // }

  return (
    <div>
      <h3>{title}</h3>
      {post &&
        post.map(post => (
          <Paper className={classes.paper}>
            <div key={post._id} className="card mb-3">
              <p className="card-header">
                <Link
                  to={`/profile/${post.username}`}
                  style={{ fontWeight: 700 }}
                  className="text-light"
                >
                  {post.username}
                </Link>{" "}
                post on {post.createdAt}
              </p>
              <div className="card-body">
                <Link to={`/post/${post._id}`}>
                  <p>{post.postContent}</p>
                  <p className="mb-0">
                    Replies: {post.replyCount} || Click to{" "}
                    {post.replyCount ? "see" : "start"} the discussion!
                  </p>
                </Link>
              </div>
            </div>
          </Paper>
        ))}
    </div>
  );
};

export default PostList;