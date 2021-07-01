import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SignIn from "../../components/Sign-in";
import SignUp from "../../components/Sign-up";

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

const SignInSignUp = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Navigation</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}> 
                    <SignIn />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <SignUp />
                        </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

export default SignInSignUp;