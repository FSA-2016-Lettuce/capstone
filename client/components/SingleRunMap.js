import React, { Component, useEffect } from 'react';
// What I'm importing below are the built-in react components to create the map
import { MapContainer, TileLayer } from 'react-leaflet';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MapWithRoute from './MapWithRoute';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '50vh',
  },
}));

const SingleRunMap = (props) => {
  const classes = useStyles();

  const routePath =
    props.waypoints === undefined || !props.waypoints.length
      ? [[0, 0]]
      : props.waypoints.map((waypoint) => [
          waypoint.latitude,
          waypoint.longitude,
        ]);

  return (
    // Map container is the skeleton component to hold the map itself
    <MapContainer
      className={classes.mapContainer}
      // For centering in the future, maybe find the mid-range and use that?
      // (Max Y + Min Y) / 2 && (Max X + Min X) / 2
      center={routePath[0]}
      zoom={13.5}
    >
      {/* TileLayer states where you want the map itself to come from.
      In this case, it's openstreetmap (open source) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapWithRoute routePath={routePath} />
    </MapContainer>
  );
};

export default SingleRunMap;
