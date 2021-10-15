import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { green } from '@material-ui/core/colors';
import "./../../pages/css/style.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 300,
    
  },
  media: {
    height: 140,
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default function MediaCard({ name, description, url, image }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card className={classes.root}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <CardActionArea>
            <CardMedia
              className="media-img"
              image={image}
              title="Resources"
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>

          <CardActions>
            <ColorButton variant="contained" color="green" href={url}>
              Learn More
            </ColorButton>
          </CardActions>
        </Grid>
      </Card>
    </Grid>
  );
}
