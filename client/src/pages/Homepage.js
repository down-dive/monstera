import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PostForm from "../components/PostForm";
import DangerButton from "../components/DangerButton";
import PostList from "../components/PostList";
import FriendList from "../components/Friends-list";
import NotificationList from "../components/NotificationList";
import Resources from "../components/Resources";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";
import "./css/style.css"

const Homepage = props => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid container justify="center" item xs={0} md={3}>
          <div className="mb-0">
            <DangerButton />
          </div>
          {loggedIn && userData ? (
            <div container>
              <FriendList
                username={userData.me.username}
                friendCount={userData.me.friendCount}
                friends={userData.me.friends}
              />
            </div>
          ) : null}
        </Grid>
        {loggedIn && (
          <Grid item xs={0} md={5}>
            {" "}
            <div>
              <PostForm />
            </div>
            {props.showNotifications && (
              <Paper className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
                <NotificationList notifications={props.notifications} />
              </Paper>
            )}
            <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <PostList posts={posts} title="Some Feed for Post(s)..." />
              )}
            </div>
          </Grid>
        )}
        <Grid item xs={0} md={4}>
          <Resources />
        </Grid>
      </Grid>
    </main>
  );
};

export default Homepage;
