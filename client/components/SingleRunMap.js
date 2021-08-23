import React, { Component } from 'react';
// What I'm importing below are the built-in react components to create the map
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Dummy data: array of lats and longs (I grabbed these manually from google maps)
const dummyData = [
  [40.759253, -73.774953],
  [40.76006, -73.775218],
  [40.76147, -73.769917],
  [40.76897, -73.77377],
  [40.769715, -73.770168],
  [40.769894, -73.7702],
  [40.770144, -73.7693],
  [40.77027, -73.7686],
  [40.770356, -73.768239],
  [40.770602, -73.768027],
  [40.770823, -73.767928],
  [40.770983, -73.76762],
  [40.771018, -73.766655],
  [40.771454, -73.766332],
  [40.771796, -73.766354],
  [40.772013, -73.766907],
  [40.771954, -73.767954],
  [40.77152, -73.769428],
  [40.77087, -73.770246],
  [40.770289, -73.77063],
  [40.770283, -73.770803],
  [40.769648, -73.770643],
  [40.767974, -73.77836],
  [40.760309, -73.774321],
  [40.760077, -73.775225],
  [40.759253, -73.774953],
];

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '50vh',
  },
}));

export default function SingleMapView() {
  const classes = useStyles();
  return (
    // Map container is the skeleton component to hold the map itself
    <MapContainer
      className={classes.mapContainer}
      // For centering in the future, maybe find the mid-range and use that?
      // (Max Y + Min Y) / 2 && (Max X + Min X) / 2
      center={dummyData[0]}
      zoom={13.5}
    >
      {/* TileLayer states where you want the map itself to come from.
      In this case, it's openstreetmap (open source) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker creates the pin you see on the map */}
      <Marker position={dummyData[0]}>
        {/* Popup creates the popup you see when you click on the parent
        component (in this case, marker). Note that within the popup, you can
        use HTML tags to style the popup. Or you can just include text like you see here. See Run component for example of using HTML tags */}
        <Popup>Starting point for the awesome run!</Popup>
      </Marker>
      {/* Polyline takes in the array of points and makes the path! */}
      <Polyline pathOptions={{ color: 'blue' }} positions={dummyData} />
    </MapContainer>
  );
}
