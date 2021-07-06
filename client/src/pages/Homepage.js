// import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import PostForm from "../components/PostForm";
import DangerButton from "../components/DangerButton";
import PostList from "../components/PostList";

import FriendList from "../components/Friends-list";
import NotificationList from "../components/NotificationList";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Homepage = (props) => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();
  const classes = useStyles();

  return (
    <main>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs={3}>
          <DangerButton />

          {/* <Paper className={classes.paper}>local resources/links</Paper> */}

          {loggedIn && userData ? (
            <Paper className={classes.paper}>
              <FriendList
                username={userData.me.username}
                friendCount={userData.me.friendCount}
                friends={userData.me.friends}
              />
            </Paper>
          ) : null}
        </Grid>
        {loggedIn && (
          <Grid item xs={5}>
            {" "}
            <Paper className={classes.paper}>
              <PostForm />
            </Paper>
            { props.showNotifications && (
              <Paper className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
                <NotificationList notifications={props.notifications} />
              </Paper>
            )
            }
            <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <PostList posts={posts} title="Some Feed for Post(s)..." />
              )}
            </div>
          </Grid>
        )}

        <Grid item xs={3}>
          <Paper className={classes.paper}>local resources/links</Paper>
        </Grid>
      </Grid>
    </main>
  );
};

export default Homepage;