import React from 'react';
import { useParams } from 'react-router-dom';

import UserProfile from "../components/User-profile";
import PostForm from "../components/PostForm";
import FriendList from "../components/Friends-list";
import Grid from '@material-ui/core/Grid';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND, REMOVE_FRIEND } from '../utils/mutations';

const Profile = props => {
  const { username: userParam } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
  const [removeFriend] = useMutation(REMOVE_FRIEND);
  // const [isFriend, setFriend] = useState(false);

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
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
        You need to be logged in to see this. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
      // setFriend(true);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveClick = async () => {
    try {
      await removeFriend({
        variables: { id: user._id }
      });
      // setFriend(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Grid container item xs={12}>
        <h2 className="bg-dark p-2 display-inline-block text-primary">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        {userParam && (
          <div>
            <button className="btn ml-auto" onClick={handleClick}>
              Add Friend
            </button>
            <button className="btn ml-auto" onClick={handleRemoveClick}>
              Remove Friend
            </button>
          </div>
        )

        }

        {/* {userParam && (!isFriend ? (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Friend
          </button>
        ):
        (<button className="btn ml-auto" onClick={handleRemoveClick}>
            Remove Friend
          </button>))} */}
      </Grid>
      <Grid item xs={12}>
        <UserProfile />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs={3}>
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </Grid>
      </Grid>
      <div className="mb-3">{!userParam && <PostForm />}</div>
    </div>
  );
};

export default Profile;