import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UserImage from '../User-image'
import UserInfo from '../User-info'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const UserProfile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <UserImage />
        </Grid>
        <Grid item xs={8}>
         <UserInfo />
        </Grid>
      </Grid>
    </div>
  );
}

export default UserProfile;