import React from 'react';
import { useSelector } from 'react-redux';
import FilterRuns from './FilterRuns';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CallMissedSharp } from '@material-ui/icons';

/**
 * COMPONENT
 */

const useStyles = makeStyles((theme) => ({
  banner: {
    marginLeft: theme.spacing(2),
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  console.log('user: ', user);

  //  cannot redirect from the backend, this was my only thought
  // if (user.newProfile === 'YES') {
  //   history.push(`/users/${user.id}/profile/edit`);
  // }

  return (
    <div>
      <h2 className={classes.banner}>
        Welcome to flock! The runs in your area are shown below:{' '}
      </h2>
      <FilterRuns />
    </div>
  );
};

export default Home;
