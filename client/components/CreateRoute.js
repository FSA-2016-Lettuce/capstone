import React, {
  Component,
  useState,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MapContainer, TileLayer, Circle, FeatureGroup } from 'react-leaflet';
import L from 'leaflet';
import { EditControl } from 'react-leaflet-draw';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  FormControl,
  Box,
  TextField,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import { _createRoute } from '../store/route';
import InstructionalModal, {
  Transition,
} from './modal-instructions/InstructionalModal';
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '95%',
      display: 'flex',
    },
  },
  textField: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
    paddingLeft: '6px',
    marginTop: '20px',
  },
  subtitle: {
    paddingLeft: '6px',
  },
  modal: {
    justifyContent:'flex-end'
  },
  test: {
    display: 'grid'
  }
}));

const CreateRoute = () => {
  const classes = useStyles();
  const [center, setCenter] = useState({ lat: 39.272132, lng: -76.598145 });
  // Local state to hold information about drawn lines on map
  const [mapLayers, setMapLayers] = useState([]);
  // Local state to hold information about text entered into "Name" form
  const [formName, setFormName] = useState('');
  // Local state for visibility of error message
  const [errorVis, setErrorVis] = useState('hidden');
  const zoomLevel = 13.5;
  // Save map ref to pass into mapContainer
  const mapRef = useRef();

  // Grab current logged in user from store
  const user = useSelector((state) => state.auth);
  // Set up dispatch and history functionality
  const dispatch = useDispatch();
  let history = useHistory();

  // Callback functions to handle drawing state
  // When a polyline is created, add that polyline layer to state
  const _onCreated = (e) => {
    console.log('ON CREATE: ', e);

    const { layerType, layer } = e;
    if (layerType === 'polyline') {
      const { _leaflet_id } = layer;

      setMapLayers((layers) => [
        ...layers,
        { id: _leaflet_id, latlngs: layer.getLatLngs() },
      ]);
    }
  };

  // When a polyline is edited, update the polyline that was edited
  const _onEdited = (e) => {
    console.log('ON EDIT: ', e);

    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id, editing }) => {
      setMapLayers((layers) =>
        layers.map((l) =>
          l.id === _leaflet_id ? { ...l, latlngs: [...editing.latlngs[0]] } : l
        )
      );
    });
  };

  // When a polyline is deleted, remove that polyline from state
  const _onDeleted = (e) => {
    console.log('ON DELETE: ', e);
    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id }) => {
      setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
    });
  };

  // Update state of form as user updated text field
  const handleInput = (evt) => {
    const newValue = evt.target.value.trim();
    setFormName(newValue);
  };

  // What to do when a user hits the "submit" button:
  const handleSubmit = (evt) => {
    // Prevent default form behavior
    evt.preventDefault();

    // NOTE: There is nothing stopping users from creating multiple routes at one
    // time. Prevent that with the conditional below:
    if (mapLayers.length === 1) {
      // Create an array of waypoints only from current mapLayers state
      const waypointsOnly = mapLayers[0].latlngs.map((point) => {
        return [point.lat, point.lng];
      });

      // Create routeDetails object that will be sent to back-end
      const routeDetails = {
        name: formName,
        waypoints: [...waypointsOnly],
      };

      // Dispatch thunk to create the route and push back to the home page
      dispatch(_createRoute(routeDetails));
      history.push('/');
    } else {
      // Otherwise, do nothing but show error message
      setErrorVis('visible');
    }
  };

  return (
    <div>
      <div className='test'>
        <InstructionalModal className={classes.modal} />
      </div>
      <MapContainer
        center={[user.homeLat, user.homeLng]}
        zoom={zoomLevel}
        ref={mapRef}
      >
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={_onCreated}
            onEdited={_onEdited}
            onDeleted={_onDeleted}
            draw={{
              rectangle: false,
              circle: false,
              circlemarker: false,
              marker: false,
              polygon: false,
              polyline: {
                metric: false,
                feet: false,
              },
            }}
          />
        </FeatureGroup>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>

      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          size="small"
          label="Name"
          defaultValue={formName}
          className={classes.textField}
          variant="filled"
          helperText="Enter the name of the Route"
          onChange={handleInput}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit Route
        </Button>
      </form>
      <Box
        component="div"
        visibility={errorVis}
        color="red"
        fontWeight="fontWeightBold"
      >
        You may only create one route at a time. Update the map accordingly.
      </Box>
    </div>
  );
};

export default CreateRoute;
