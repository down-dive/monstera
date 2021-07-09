import React from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PostForm from "../components/PostForm";
import FriendList from "../components/Friends-list";
import Grid from "@material-ui/core/Grid";
import PostList from "../components/PostList";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_FRIEND, REMOVE_FRIEND } from "../utils/mutations";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const Profile = props => {
  const { username: userParam } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
  const [removeFriend] = useMutation(REMOVE_FRIEND);
  // const [isFriend, setFriend] = useState(false);

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // useEffect(()=> {
  //   // get signed in user:: loggedInUser = me;
  //   let loggedInUser = data?.user;
  //   if (loggedInUser.friends.include(user)) {
  //     setFriend(true);
  //   }
  //   // check loggedInUser.includes(user)
  //   // setFriend(true)
  // }, [])

  // redirect to personal profile page if username is yours
  //   if (
  //     Auth.loggedIn() &&
  //     Auth.getProfile().data.username === userParam
  //   ) {
  //     return <Redirect to="/profile" />;
  //   }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
      // setFriend(true);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveClick = async () => {
    try {
      await removeFriend({
        variables: { id: user._id },
      });
      // setFriend(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Grid container item xs={12}>
      </Grid>
      <Grid></Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid style={{ margin: "8rem 0 0" }} item xs={3}>
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container item justify="space-around" alignItems="flex-start">
            <h2 className="bg-dark p-2 display-inline-block text-primary">
              Viewing {userParam ? `${user.username}'s` : "your"} profile.
            </h2>
            {userParam && (
              <div item>
                <ColorButton
                  variant="contained"
                  color="green"
                  style={{ margin: 10 }}
                  className="col-6 col-md-3"
                  onClick={handleClick}
                >
                  Add Friend
                </ColorButton>
                <ColorButton
                  variant="contained"
                  color="green"
                  style={{ margin: 10 }}
                  className="col-6 col-md-3"
                  onClick={handleRemoveClick}
                >
                  Remove Friend
                </ColorButton>
              </div>
            )}
          </Grid>
          {!userParam && <PostForm />}

          <div className="col-6 mb-3 col-lg-8">
            <PostList
              posts={user.posts}
              title={`${user.username}'s posts...`}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
