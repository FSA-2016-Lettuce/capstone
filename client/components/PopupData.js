import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { displayKm } from '../utils';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '50vh',
  },
  buttonFlex: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const PopupData = (props) => {
  const { pace, route, name, startDate, id } = props.run;
  const classes = useStyles();
  const displayPace = moment.utc(pace * 1000).format('m:ss');
  const displayDate = moment(startDate).format('ddd, MMM Do YYYY, h:mm a');
  const displayDistance = displayKm(route.distance);

  return (
    <div>
      <h2>{route.name}</h2>
      <p>Pace: {displayPace}</p>
      <p>Distance: {displayDistance}</p>
      <p>Run Start: {displayDate}</p>
      <div className={classes.buttonFlex}>
        <Link to={`/runs/${id}`}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => console.log('hello from: details')}
          >
            Details
          </Button>
        </Link>
        <Button
          type="button"
          variant="outlined"
          color="secondary"
          onClick={() => console.log('hello from join')}
        >
          Join Run
        </Button>
      </div>
    </div>
  );
};

export default PopupData;
