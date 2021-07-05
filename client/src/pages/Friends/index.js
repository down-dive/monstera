import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FriendList from "../../components/Friends-list";
import SearchBar from "../../components/Search-bar";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../../utils/queries";

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

const Profile = props => {
  // const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  // const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
        //   container
          direction="row"
          justify="center"
          alignItems="center"
        //   spacing={4}
          item
          xs={6}
        >
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
      </Grid>
    </div>
  );
};

export default Profile;
