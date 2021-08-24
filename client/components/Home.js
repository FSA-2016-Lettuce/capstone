import React from 'react';
import { connect } from 'react-redux';
import HomeMap from './HomeMap';
import FilterRuns from './FilterRuns';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CallMissedSharp } from '@material-ui/icons';

/**
 * COMPONENT
 */

const useStyles = makeStyles((theme) => ({
  banner: {
    marginLeft: '14px',
  },
}));

export const Home = (props) => {
  const classes = useStyles();
  let { username } = props;
  username = username || 'Guest';

  return (
    <div>
      <h2 className={classes.banner}>
        Welcome to Flock! The runs in your area are shown below:{' '}
      </h2>
      <HomeMap />
      <FilterRuns />
      <Footer />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
