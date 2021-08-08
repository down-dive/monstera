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
import Image from 'material-ui-image'

import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import './styles.css'


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
  customizeToolbar: {
    minHeight: 10
}
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BottomAppBar(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <React.Fragment>
       <HideOnScroll {...props}>
      <AppBar position="fixed" style={{ background: '#04752f' }} className={classes.appBar}>
        <Toolbar className={classes.customizeToolbar}>
          <footer>
            <div className={classes.root}>
              <Grid container spacing={1}>
                <Grid item xs={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      Shirin Shahram
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://github.com/sshahram" >
                        <GitHubIcon className='GitHubIcon' />

                      </Link>
                      <Link href="https://www.linkedin.com/in/shirin-shahram/" >
                      <LinkedInIcon className="LinkedInIcon" />
                      </Link>
                    </Grid>
                  </Grid>
                  </Grid>
                <Grid className='space' item xs={3}>
                  <Grid className='space' container spacing={1}>
                    <Grid item xs={12}>
                      Zhypara Abdieva
                    </Grid>
                    <Grid item xs={12}>
                      <Link href="https://github.com/jypara-git" >
                      <GitHubIcon className='GitHubIcon' />

                      </Link>
                      <Link href="https://www.linkedin.com/in/zhypara-abdieva-907746203/" >
                      <LinkedInIcon className="LinkedInIcon" />
                      </Link>
                    </Grid>
                  </Grid>
                  </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      Kevin Lawrence
                    </Grid>
                    {/* <Grid item xs={12}>
                    <img src="https://ibb.co/ynHW3vj" alt='random view image' />
                    </Grid> */}
                    <Grid item xs={12}>
                      <Link href="https://github.com/kingkevin05" >
                      <GitHubIcon className='GitHubIcon' />

                      </Link>
                      <Link href="https://www.linkedin.com/in/kevinlawrence05/" >
                        <LinkedInIcon className="LinkedInIcon" />
                      </Link>
                    </Grid>
                  </Grid>
                  </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      Yevgeniya Terlyuk
                    </Grid>
                    {/* <Grid item xs={12}>
                      <CardMedia
                        className={classes.media}
                        image="../../assets/Shirin.png"
                        title="Paella dish"
                      />
                    </Grid> */}
                    <Grid item xs={12}>
                      <Link href="https://github.com/down-dive" >
                      <GitHubIcon className='GitHubIcon' />
                      </Link>
                      <Link href="https://www.linkedin.com/in/yevgeniya-terluyk-034013179/" >
                      <LinkedInIcon className="LinkedInIcon" />

                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </footer>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}