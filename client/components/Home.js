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
  runDetail: {
    padding: '6px',
    marginTop: '8px',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" className={classes.runDetail}>
        Find A Run
      </Typography>
      <FilterRuns />
    </div>
  );
};

export default Home;
