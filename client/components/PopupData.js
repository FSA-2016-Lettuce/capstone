import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { displayMiles } from '../utils';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '50vh',
  },
  buttonFlex: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  listItemText: {
    margin: 0,
  },
}));

const PopupData = (props) => {
  const { pace, route, name, startDate, id } = props.run;
  const classes = useStyles();
  const displayPace = moment.utc(pace * 1000).format('m:ss') + ' min/mile';
  const displayDate = moment(startDate).format('ddd, MMM Do YYYY, h:mm a');
  const displayDistance = String(displayMiles(route.distance)) + ' miles';

  return (
    <div>
      <Typography variant="h6">{route.name}</Typography>
      <List>
        <ListItem>
          <ListItemText
            className={classes.listItemText}
            primary="Start Time"
            secondary={displayDate}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className={classes.listItemText}
            primary="Pace"
            secondary={displayPace}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className={classes.listItemText}
            primary="Distance"
            secondary={displayDistance}
          />
        </ListItem>
      </List>
      <Box className={classes.buttonFlex}>
        <Link to={`/runs/${id}`}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => console.log('hello from: details')}
          >
            View Run Details
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default PopupData;
