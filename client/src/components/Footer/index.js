import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  customizeToolbar: {
    minHeight: 10,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  container: {
  }
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.customizeToolbar}>
          <footer>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                <Grid container spacing={3}>
        <Grid item xs={12}>
   Shirin Shahram
        </Grid>
        <Grid item xs={12}>
xs=6
        </Grid>
        <Grid item xs={12}>
xs=6
        </Grid>
        <Grid item xs={12}>
xs=3
        </Grid>
      </Grid>
                </Grid>
                <Grid item xs={3}>xs=6
                </Grid>
                <Grid item xs={3}>xs=6
                </Grid>
                <Grid item xs={3}>xs=3
                </Grid>
              </Grid>
            </div>
            Made by Monstera Team ♡
          </footer>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}