import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserInfo from '../../components/User-info/index.js'
// import test from '../../components/test-component'

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
                    <Paper className={classes.paper}>Search bar</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Navigation</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>Profile image</Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                        <UserInfo />
                        </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

export default Profile;