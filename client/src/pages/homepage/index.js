// import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import PostForm from "../../components/PostForm";

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
        </Grid>
      </Grid>
        <Grid item xs={12}>
        </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        spacing={4}
        
      >
        <Grid item xs={3}>
        

        </Grid>
        <Grid  item xs={5}>
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
