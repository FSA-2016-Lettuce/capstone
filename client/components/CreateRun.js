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
import { DateTimePicker } from '@material-ui/pickers';
import { _getRoutes } from '../store/route';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { getPaceList } from '../utils';
import MapWithRoute from './MapWithRoute';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  runDetail: {
    padding: '6px',
    marginTop: '8px',
  },
  button: {
    margin: 'auto',
    width: '45%',
  },
  container: {
    margin: '16px auto',
    width: '100%',
  },
  timePickerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formField: {
    margin: '16px auto',
    width: '80%',
    minHeight: 50,
  },
}));

const CreateRun = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth, shallowEqual);
  const routes = useSelector((state) => state.route.allRoutes);
  const [selectedRoute, setSelectedRoute] = useState({
    name: 'Select a local route',
    distance: 0,
    waypoints: [],
  });
  const [selectedDate, handleDateChange] = useState(
    moment().startOf('hour').add(1, 'hour')
  );
  const [formState, setFormState] = useState({
    pace: moment.utc(user.pace * 1000).format('m:ss'),
  });
  const displayDistance = distanceConverter(selectedRoute.distance, 'ft');
  const paceList = getPaceList();
  const routePath = selectedRoute.waypoints.map((waypoint) => [
    waypoint.latitude,
    waypoint.longitude,
  ]);
  const history = useHistory();

  console.log('routes in CreateRun:', routes);
  console.log('selected route', selectedRoute);

  useEffect(() => {
    async function loadRoutes() {
      await dispatch(_getRoutes(user.homeLat, user.homeLng));
    }
    if (user.homeLat !== 0) loadRoutes();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'route') {
      let newSelectedRoute = routes.filter(
        (route) => route.name === e.target.value
      )[0];
      if (newSelectedRoute === undefined) {
        newSelectedRoute = {
          name: 'Select a local route',
          distance: 0,
          waypoints: [],
        };
      }
      setSelectedRoute(newSelectedRoute);
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    //create new run object
    const parsedPace = String(formState.pace).split(':');
    const newPace = parsedPace[0] * 60 + parsedPace[1] * 1;
    const newRun = {
      routeId: selectedRoute.id,
      startDate: moment(selectedDate).format(),
      pace: newPace,
    };
    console.log('new run: ', newRun);
    await dispatch(_createRun(newRun));
    history.push('/');
  };

  return (
    user !== undefined && (
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
          {selectedRoute.distance > 0 && <MapWithRoute routePath={routePath} />}
        </MapContainer>
        <Container className={classes.container} maxWidth="sm">
          <form className={classes.root} noValidate autoComplete="off">
            <Select
              className={classes.formField}
              name="route"
              id="route-selector"
              value={selectedRoute.name}
              onChange={handleChange}
              label="Route"
            >
              <MenuItem value={'Select a local route'}>
                <em>Select a local route</em>
              </MenuItem>
              {routes.map((route) => (
                <MenuItem key={route.id} value={route.name}>
                  {route.name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              className={classes.formField}
              id="outlined"
              disabled
              name="distance"
              label="Distance of selected route"
              value={`${displayDistance} miles`}
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              className={classes.formField}
              id="outlined"
              select
              name="pace"
              label="Set a target pace for this run"
              value={formState.pace}
              variant="outlined"
              onChange={handleChange}
            >
              {paceList.map((pace, index) => (
                <MenuItem key={index} value={pace}>
                  {`${pace} min/mile`}
                </MenuItem>
              ))}
            </TextField>
            <DateTimePicker
              className={classes.formField}
              id="time-picker"
              label="Pick a date and time for your run"
              minutesStep={15}
              variant="outlined"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Create Run
            </Button>
          </form>
        </Container>
      </div>
    )
  );
};

export default CreateRun;
