import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  // text: {
  //   // padding: theme.spacing(1),
  //   textAlign: 'center',
  // },
}));

const UserInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className='option' container spacing={3}>
        <Grid item xs={12}>
          You are awesome and you know it!!!
        </Grid>
        <Grid item xs={12}>
          ...user info
        </Grid>
        <Grid item xs={12}>
          ... user info
        </Grid>
        <Grid item xs={12}>
          ...user info
        </Grid>
      </Grid>
    </div>
  );
}

export default UserInfo;