import React, {
  Component,
  useState,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Circle, FeatureGroup } from 'react-leaflet';
import L from 'leaflet';
import { EditControl } from 'react-leaflet-draw';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FormControl, Box, TextField, Button } from '@material-ui/core';
import {createRouteThunk} from '../store/route'

const useStyles = makeStyles((theme) => ({
  formControl: {
    height: '30vh',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CreateRoute = () => {
  const classes = useStyles();
  const [center, setCenter] = useState({ lat: 39.272132, lng: -76.598145 });
  const [mapLayers, setMapLayers] = useState([]);
  const zoomLevel = 13;
  const mapRef = useRef();

  const user = useSelector((state) => state.auth)

  // Callback functions to handle updating drawing state
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

  const _onDeleted = (e) => {
    console.log('ON DELETE: ', e);
    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id }) => {
      setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
    });
  };

  const [formName, setFormName] = useState('');

  const handleInput = (evt) => {
    const newValue = evt.target.value;
    setFormName(newValue);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // console.log('WHAT IS OUR ROUTE?', mapLayers);

    // console.log('WHAT IS NAME?', formName);

    const waypointsOnly = mapLayers[0].latlngs.map((point) => {
      return [point.lat, point.lng];
    });

    console.log('WHAT IS WAYPOINTS ONLY?', waypointsOnly);

    const routeDetails = {
      name: formName,
      waypoints: [...waypointsOnly],
    };

    console.log('WHAT IS ROUTE DETAILS?', routeDetails);

    /*
      THE OBJECT TO SEND:
      {
        name: "STRING",
        waypoints: ARRAY
      }
    */
  };

  return (
    <div>
      <h2>Welcome to Create-A-Route!</h2>
      <h3>
        To get started, click the / button in the top right corner of the map
      </h3>
      {/* space for modal */}
      <MapContainer center={[user.homeLat, user.homeLng]} zoom={zoomLevel} ref={mapRef}>
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
            }}
          />
        </FeatureGroup>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>

      <Box
        display="flex"
        justifyContent="space-around"
        className={classes.formControl}
      >
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="Name"
            id="margin-normal"
            name="name"
            defaultValue={formName}
            // className={classes.textField}
            helperText="Enter the name of the Route"
            onChange={handleInput}
          />
          {/* <TextField id="outlined-basic" label="Name" variant="filled" />  */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            // className={classes.button}
          >
            Submit Route
          </Button>
        </form>
      </Box>
      <pre>{JSON.stringify(mapLayers, 0, 2)}</pre>
    </div>
  );
};

export default CreateRoute;
