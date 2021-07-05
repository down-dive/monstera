import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import UserInfo from '../../components/User-info/index.js';
import UserImage from '../../components/User-image';
import SearchBar from '../../components/Search-bar';
import UserPosts from '../../components/User-posts';

import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { ADD_FRIEND } from '../../utils/mutations';

import './style.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Profile = () => {
    const classes = useStyles();

    const { username: userParam } = useParams();

    const [addFriend] = useMutation(ADD_FRIEND);
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <SearchBar />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Navigation</Paper>
                    {userParam && (
                        <Paper className={classes.paper} onClick={handleClick}>
                            Add Friend
                        </Paper>
                    )}
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}> User image
                        <UserImage />
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                        <UserInfo />
                    </Paper>
                </Grid>
            </Grid>
            <UserPosts />
        </div>
    )
}


export default Profile;