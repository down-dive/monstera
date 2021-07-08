import React from "react";
import Image from "material-ui-image";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      // margin: theme.spacing(1),
    },
    justify:"center",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

var items = [1037, 1039, 1043, 1057, 11, 12];

console.log(random_item(items));

const UserImage = () => {
  const classes = useStyles();

  return (
    <Grid item className="card">
    <img className={classes.root} src="https://picsum.photos/200/300" alt="random view image" />
  </Grid>
  );
};

export default UserImage;
