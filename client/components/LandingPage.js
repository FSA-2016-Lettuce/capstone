import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%',
    height: 'auto',
    opacity: '0.8',
  },
  imageContainer: {
    textAlign: 'center',
  },
  container: {
    textAlign: 'center',
    marginTop: '10px',
  },
  button: {
    width: '85%',
  },
  buttonContainer: {
    margin: '20px',
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.container} maxWidth="xs">
        <Typography variant="h4" component="h4">
          The #1 app for finding your next run group
        </Typography>
        <div className={classes.imageContainer}>
          <img className={classes.image} src="/landing-page-mobile.png" />
        </div>
        <div className={classes.buttonContainer}>
          <Link to="/signup">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disableElevation
            >
              Sign Up Here
            </Button>
          </Link>
          <p />
          <Link to="/login">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disableElevation
            >
              Already Have an Account?
            </Button>
          </Link>
        </div>
        <Typography variant="h5" component="h5">
          About flock
        </Typography>
        <Typography>
          flock is a collaboative app made by runners, for runners. It connects
          like-minded runners who want to create, join, and search for group run
          events in their neighborhood.
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
