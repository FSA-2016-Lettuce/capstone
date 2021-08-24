import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
  const { pace, distance, name, date } = props.data;
  const classes = useStyles();
  return (
    <div>
      <h2>{name}</h2>
      <p>Pace: {pace}</p>
      <p>Distance: {distance}</p>
      <p>Run Start: {date}</p>
      <div className={classes.buttonFlex}>
        <Link to={'/runs/1'} >
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

/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}
*/
