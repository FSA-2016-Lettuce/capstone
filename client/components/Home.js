import React from 'react';
import { connect } from 'react-redux';
import HomeMap from './HomeMap';
import FilterRuns from './FilterRuns'
import Footer from './Footer'

/**
 * COMPONENT
 */
export const Home = (props) => {
  let { username } = props;
  username = username || 'Guest';

  return (
    <div>
      <h2>Welcome to Flock! The runs in your area are shown below: </h2>
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
