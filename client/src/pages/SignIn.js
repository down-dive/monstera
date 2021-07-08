import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import SignIn from "../components/Sign-in";
import SignUp from "../components/Sign-up";

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

const SignInSignUp = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        // container
        direction="row"
        justify="space-around"
        // alignItems="center"
        spacing={4}
        style={{ margin: "10rem" }}
        
      >
        <Grid item xs={6}>
          <div className="card">
            <SignIn />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="card">
            <SignUp />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignInSignUp;
