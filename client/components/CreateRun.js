import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
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
import { TimePicker } from '@material-ui/pickers';
import { _getRoutes } from '../store/route';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

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
  const user = useSelector((state) => state.auth, shallowEqual);
  const routes = useSelector((state) => state.route.allRoutes);
  const [formState, setFormState] = useState({
    pace: user.pace * 1,
    date: moment(),
    route: routes.length ? routes[0].name : '',
    distance: routes.length ? distanceConverter(routes[0].distance, 'ft') : '',
  });

  console.log('routes in CreateRun:', routes);

  useEffect(() => {
    async function loadRoutes() {
      await dispatch(_getRoutes(user.homeLat, user.homeLng));
    }
    if (user.homeLat !== 0) loadRoutes();
  }, []);

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    //do stuff
  };

  const [selectedDate, handleDateChange] = useState(moment());

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
            <InputLabel id="route-selector-label">
              Select an existing route
            </InputLabel>
            <Select
              name="route"
              labelId="demo-simple-select-autowidth-label"
              id="route-selector"
              value={formState.route}
              onChange={changeHandler}
              autoWidth
              label="Select An Existing Route"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {routes.map((route) => (
                <MenuItem key={route.id} value={route.name}>
                  {route.name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              name="pace"
              label="Preferred Pace min/mi"
              defaultValue={user.pace}
              variant="outlined"
              onChange={changeHandler}
            />
            <TimePicker
              margin="normal"
              id="time-picker"
              label="Start Time"
              minutesStep={15}
              variant="outlined"
              value={selectedDate}
              onChange={handleDateChange}
            />

            <TextField
              id="outlined"
              name="distance"
              label="Distance (miles)"
              defaultValue={formState.distance}
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
