import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  banner: {
    margin: '15px',
    textAlign: 'center',
  },
}));

const LandingPageWaiting = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      if (user.id) {
        history.push(`/`);
      } else {
        history.push(`/landingpage`);
      }
    }, 500);
  }, []);

  return (
    <React.Fragment>
      <Typography className={classes.banner} variant="h4" component="h4">
        Loading...
      </Typography>
    </React.Fragment>
  );
};

export default LandingPageWaiting;
