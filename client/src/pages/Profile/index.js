import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserInfo from '../../components/User-info/index.js'
import UserImage from '../../components/User-image'
import SearchBar from '../../components/Search-bar'
import UserPosts from  '../../components/User-posts'
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