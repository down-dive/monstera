import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserImage from "../user-image";
import UserInfo from "../User-info";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const UserProfile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={6}
      >
        <Grid item>
          <UserImage />
        </Grid>
        <Grid item xs={4}>
          <UserInfo />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
