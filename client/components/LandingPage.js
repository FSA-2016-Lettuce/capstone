import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '187px',
    height: '354px',
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

const LandingPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="sm">
        <Typography className={classes.banner} variant="h4" component="h4">
          Come join the flock!
        </Typography>
        <div className={classes.imageContainer}>
          <img className={classes.image} src="/flock_home.png" />
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
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
