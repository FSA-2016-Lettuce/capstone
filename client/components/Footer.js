import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    color: 'blanchedalmond',
    textAlign: 'center',
    marginTop: '1.5em',
    alignItems: 'center',
    height: '2em'
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <h5>About Us</h5>
      <h5>Meet the Team</h5>
    </div>
  );
};

export default Footer;
