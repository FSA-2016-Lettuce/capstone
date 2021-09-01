import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '200px',
    height: '200px',
  },
  banner: {
    margin: '15px',
  },
  imageContainer: {
    textAlign: 'center',
  },
  container: {
    textAlign: 'center',
  },
  button: {
    width: '85%',
  },
  buttonContainer: {
    margin: '20px',
  },
}));

const SignupWaiting = () => {
  const user = useSelector((state) => state.auth);
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push(`/users/${user.id}/profile/edit`);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="sm">
        <Typography className={classes.banner} variant="h4" component="h4">
          Redirecting To Your User Profile!!!
        </Typography>
        <div className={classes.imageContainer}>
          <img className={classes.image} src="/clock.png" />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default SignupWaiting;
