import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import ReplyForm from "../ReplyForm";

const useStyles = makeStyles({
  root: {
    minWidth: 275,

    margin: 10,
  },

  title: {
    fontSize: 16,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  reply: {
    justifyContent: "center",
  },

  pos: {
    marginBottom: 12,
  },
});

const PostList = ({ posts }) => {
  const classes = useStyles();
  if (!posts) {
    return <h3>No Posts Yet</h3>;
  }

  console.log(posts);

  return (
    <div className={classes.root}>
      {posts &&
        posts.slice(0, 5).map(post => (
          <CardContent key={post._id} className="card mb-3">
            <Typography
              className={classes.title}
              style={{ color: "grey" }}
              gutterBottom
            >
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700, fontSize: 26, color: "white" }}
                className="text-light"
              >
                {post.username}
              </Link>{" "}
              post on {post.createdAt}
            </Typography>
            <Typography className={classes.text}>
              <p className="card-body" style={{ overflowWrap: "anywhere" }}>
                {post.postContent}
              </p>
            </Typography>
            <CardActions className={classes.reply}>
              <ReplyForm post_id={post._id} />
            </CardActions>

            <div className="card-body">
              {post.replies &&
                post.replies.map(reply => (
                  <p
                    className=""
                    key={reply._id}
                    style={{ overflowWrap: "anywhere" }}
                  >
                    {reply.replyContent} -{" "}
                    <Link
                      className={classes.title}
                      style={{ color: "grey" }}
                      to={`/profile/${reply.username}`}
                    >
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: 19,
                          color: "var(--primary)",
                        }}
                      >
                        {" "}
                        {reply.username}
                      </div>{" "}
                      on {reply.createdAt}
                    </Link>
                  </p>
                ))}
            </div>

            <Typography>Replies: {post.replyCount}</Typography>
          </CardContent>
        ))}
    </div>
  );
};

export default PostList;
