import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.customizeToolbar}>
          <footer>
            <div className={classes.root}>
              <Grid item xs={12}>
                Made by Monstera Team ♡
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      Shirin Shahram
                    </Grid>
                    <Grid item xs={12}>
                      <CardMedia
                        className={classes.media}
                        image="../../assets/Shirin.png"
                        title="Paella dish"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://github.com/sshahram" >
                        <GitHubIcon />

                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://www.linkedin.com/in/shirin-shahram/" >
                        <LinkedInIcon />

                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      Zhypara Abdieva
                    </Grid>
                    <Grid item xs={12}>
                      <CardMedia
                        className={classes.media}
                        image="../../assets/Shirin.png"
                        title="Paella dish"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://github.com/jypara-git" >
                        <GitHubIcon />

                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="http://linkedin.com/in/zhypara-abdieva-907746203" >
                        <LinkedInIcon />

                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      Kevin Lawrence
                    </Grid>
                    <Grid item xs={12}>
                      <CardMedia
                        className={classes.media}
                        image="../../assets/Shirin.png"
                        title="Paella dish"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://github.com/kingkevin05" >
                        <GitHubIcon />

                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://www.linkedin.com/in/kevinlawrence05/" >
                        <LinkedInIcon />

                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      Yevgeniya Terlyuk
                    </Grid>
                    <Grid item xs={12}>
                      <CardMedia
                        className={classes.media}
                        image="../../assets/Shirin.png"
                        title="Paella dish"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://github.com/sshahram" >
                        <GitHubIcon />

                      </Link>
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://www.linkedin.com/in/shirin-shahram/" >
                        <LinkedInIcon />

                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </footer>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}