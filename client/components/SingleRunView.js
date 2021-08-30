import React, { Component, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { _getRun, removeRun } from '../store/run';
import { displayMiles } from '../utils';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  runDetail: {
    padding: '6px',
    marginTop: '8px',
  },
  button: {
    margin: theme.spacing(1),
    width: '45%',
  },
}));

const SingleRunView = (props) => {
  const runId = props.match.params.id;
  const classes = useStyles();
  const dispatch = useDispatch();
  const run = useSelector((state) => state.run.singleRun);

  console.log('SingleRunView run: ', run);

  useEffect(() => {
    async function loadRun() {
      await dispatch(_getRun(runId));
    }
    console.log('loading runs for SingleRunView');
    loadRun();
    return () => {
      dispatch(removeRun());
    };
  }, []);

  const displayPace = moment.utc(run.pace * 1000).format('m:ss');
  const displayDate = moment(run.startDate).format('ddd, MMM Do YYYY, h:mm a');
  const displayDistance = run.id ? displayMiles(run.route.distance) : 0;

  const waypoints = run.id ? run.route.waypoints : [];
  const numRunners = run.id ? run.users.length : 0;

  return (
    <div>
      <Typography className={classes.runDetail}>
        Run Details for Run #{run.id}
      </Typography>
      <SingleRunMap waypoints={waypoints} />
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
          <ListItemText primary="PACE" secondary={`${displayPace} min/mile`} />
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
            secondary={`${displayDistance} miles`}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src="/runners.png" className="singleViewIcon" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="# OF RUNNERS" secondary={numRunners} />
        </ListItem>
      </List>
      {/* TODO: To be changed after Hookup */}
      <div className="singlePageButtons">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          JOIN THIS RUN
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          BACK
        </Button>
      </div>
    </div>
  );
};

export default SingleRunView;
