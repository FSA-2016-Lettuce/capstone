import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SingleRunMap from './SingleRunMap';
import moment from 'moment';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Button from '@material-ui/core/Button';

const dummyRun = {
  date: new Date() + 1,
  distance: 4.5,
  pace: 560,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  runDetail: {
    padding: '6px',
    marginTop: '8px',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SingleRunView() {
  const classes = useStyles();

  const displayPace = moment.utc(dummyRun.pace * 1000).format('m:ss');
  const displayDate = moment(dummyRun.date).format('ddd, MMM Do YYYY, h:mm a');
  return (
    <div>
      <Typography className={classes.runDetail}>
        Run Details: Run #2106
      </Typography>
      <SingleRunMap />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src="/calendar.png" className="singleViewIcon" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="START DATE" secondary={`${displayDate}`} />
      </ListItem>
      <List className={classes.root}>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src="/clock.png" className="singleViewIcon" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="PACE" secondary={`${displayPace} min/mi`} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src="/path.png" className="singleViewIcon" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="DISTANCE"
            secondary={`${dummyRun.distance} mi`}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src="/runners.png" className="singleViewIcon" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="# OF RUNNERS" secondary={`10`} />
        </ListItem>
      </List>
      <div className="singlePageButtons">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          RSVP YES
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          RSVP NO
        </Button>
      </div>
    </div>
  );
}
