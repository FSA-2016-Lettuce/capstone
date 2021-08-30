import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { _createRun } from '../store/run';
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
import { distanceConverter } from '../utils';
import { MapContainer, TileLayer } from 'react-leaflet';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

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
  container: {
    marginTop: 15,
  },
  timePickerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const CreateRun = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const run = useSelector((state) => state.run.singleRun);
  const user = useSelector((state) => state.auth);

  const displayPace = moment.utc(run.pace * 1000).format('m:ss');
  const displayDate = moment(run.startDate).format('ddd, MMM Do YYYY, h:mm a');
  const displayDistance = distanceConverter(5000, 'ft');
  console.log('hello from create run component');

  const [formState, setFormState] = useState({
    pace: user.pace * 1,
    // distance: user.distance,
  });

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    //do stuff
  };

  return (
    user.homeLat !== 0 && (
      <div>
        <Typography variant="h5" className={classes.runDetail}>
          Create A Run
        </Typography>
        <MapContainer
          className={classes.mapContainer}
          center={[user.homeLat, user.homeLng]}
          zoom={13.5}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
        <Container className={classes.container} maxWidth="sm">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              name="pace"
              label="Preferred Pace sec/mi"
              defaultValue={user.pace}
              variant="outlined"
              onChange={changeHandler}
            />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                ampm="false"
                defaultValue={user.pace}
                onChange={changeHandler}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </MuiPickersUtilsProvider>

            <TextField
              id="outlined"
              name="distance"
              label="Distance (miles)"
              defaultValue={user.distance}
              variant="outlined"
              onChange={changeHandler}
            />
          </form>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={submitHandler}
          >
            Save Changes
          </Button>
        </Container>
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
    )
  );
};

export default CreateRun;
