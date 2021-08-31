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
    name: '',
    distance: 0,
  });
  const [selectedDate, handleDateChange] = useState(moment());
  const [formState, setFormState] = useState({
    pace: moment.duration(user.pace * 1000).asMinutes(),
    date: moment(),
  });
  const displayDistance = distanceConverter(selectedRoute.distance, 'ft');

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
      const newSelectedRoute = routes.filter(
        (route) => route.name === e.target.value
      )[0];
      setSelectedRoute(newSelectedRoute);
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    //send run to db
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
            <InputLabel
              id="route-selector-label"
              sx={{
                float: 'left',
              }}
            >
              Select a local route
            </InputLabel>
            <Select
              className={classes.formField}
              labelId="route-selector-label"
              name="route"
              id="route-selector"
              value={selectedRoute.name}
              onChange={handleChange}
              label="Route"
            >
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
              label="Distance"
              value={`${displayDistance} miles`}
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              className={classes.formField}
              name="pace"
              label="Preferred Pace min/mi"
              value={formState.pace}
              variant="outlined"
              onChange={handleChange}
            />
            <TimePicker
              className={classes.formField}
              margin="normal"
              id="time-picker"
              label="Start Time"
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
