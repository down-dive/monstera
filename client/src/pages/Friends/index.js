import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FriendsList from '../../components/Friends-list'
import SearchBar from '../../components/Search-bar'

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
                </Grid>
                <Grid item xs={9}>
                    <Paper className={classes.paper}>
                        <FriendsList />
                        </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

export default Profile;