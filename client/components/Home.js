import React from 'react';
import { connect } from 'react-redux';
import HomeMap from './HomeMap';

/**
 * COMPONENT
 */
export const Home = (props) => {
  let { username } = props;
  username = username || 'Guest';

  return (
    <div>
      <HomeMap />
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
