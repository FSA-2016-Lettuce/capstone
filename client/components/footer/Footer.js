import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import MeetTheTeam from './MeetTheTeam';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  footer: {
    display: 'flex',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    color: 'blanchedalmond',
    textAlign: 'center',
    marginTop: '1.5em',
    alignItems: 'center',
    height: '2em',
    bottom: '0',
    position: 'absolute',
    width: '100%',
  },
}));

const Footer = () => {
  const classes = useStyles();
  // const theme = useTheme();
  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.footer}>
        <Link href="#" variant="inherit" to="/about-us">
          About Us
        </Link>
        <Link href="#" variant="inherit" to="/meet-the-team">
          Meet the Team
        </Link>
      </Typography>
    </div>
  );
};

export default Footer;
