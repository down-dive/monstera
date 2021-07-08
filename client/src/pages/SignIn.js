import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SignIn from "../components/Sign-in";
import SignUp from "../components/Sign-up";

const useStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    root: {
      flexGrow: 1,
      textAlign: "center",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    customizeToolbar: {
      minHeight: 10
  }
  }));

const SignInSignUp = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                Shirin Shahram
              </Grid>
              {/* <Grid item xs={12}>
              <img src="https://ibb.co/ynHW3vj" alt='random view image' />
              </Grid> */}
              <Grid item xs={12}>
<SignIn />
              </Grid>
            </Grid>
            </Grid>
          <Grid className='space' item xs={3}>
            <Grid className='space' container spacing={1}>
              <Grid item xs={12}>
<SignUp />
              </Grid>
            </Grid>
            </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </div>
    )
}

export default SignInSignUp;