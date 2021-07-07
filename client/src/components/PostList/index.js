import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReplyForm from "../ReplyForm";
import { PossibleTypeExtensionsRule } from "graphql";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    
  },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  title: {
    fontSize: 18,
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

  console.log(posts)

  return (
    <div className={classes.root} >
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
            <Typography className="card-body">
              <span className="text-light">{post.postContent}</span>
            </Typography>
            <CardActions>
              <ReplyForm  post_id={post._id}/>
            </CardActions>
            <Typography>Replies: {post.replyCount}</Typography>
          </CardContent>
        ))}
    </div>
  );
};

export default PostList;
