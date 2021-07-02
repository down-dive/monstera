import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import SearchBar from "../../components/Search-bar";
import PostForm from "../../components/PostForm";
import DangerButton from "../../components/DangerButton";

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

const Homepage = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><SearchBar /></Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={3}>
          <DangerButton></DangerButton>
        </Grid>
        
        <Grid  item xs={6}>
          <Paper className={classes.paper}>
            {/* <SearchBar /> */}
          user post form
              <PostForm />
          </Paper>
          <Paper className={classes.paper}>news feed</Paper>
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>local resources/links</Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={6}>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
