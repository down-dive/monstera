import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./css/style.css";
import SignIn from "../components/Sign-in";
import SignUp from "../components/Sign-up";

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  root: {
    flexGrow: 1,
    textAlign: "center",
    
    // margin: "10rem"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  customizeToolbar: {
    minHeight: 10,
  },
}));

const SignInSignUp = () => {
  const classes = useStyles();
  return (
    <div className= "signPage">
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={4}
        xs={12}
      >
        <Grid>
          <SignIn />
        </Grid>
        <Grid>
          <SignUp />
        </Grid>
      </Grid>
    </div>
    </div>
  );
};

export default SignInSignUp;
