import React from 'react';
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';
import PopupData from './PopupData';
import HomeMapRunView from './HomeMapRunView';

const dummyData = [
  {
    id: 1,
    coordinates: [40.759253, -73.774953],
    name: 'First Point',
    distance: '1 mile',
    pace: '8 min/mile',
    date: '08/31/2021 @ 8:00AM',
  },
  {
    id: 2,
    coordinates: [40.779, -73.68],
    name: 'Second Point',
    distance: '2 miles',
    pace: '12 min/mile',
    date: '08/31/2021 @ 10:00AM',
  },
  {
    id: 3,
    coordinates: [40.76, -73.6],
    name: 'Third Point',
    distance: '10 miles',
    pace: '6 min/mile',
    date: '08/31/2021 @ 8:00PM',
  },
];

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '55vh',
  },
}));

const HomeMap = (props) => {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);

  console.log('HomeMap props: ', props);

  return (
    user.homeLat !== 0 && (
      <MapContainer
        className={classes.mapContainer}
        center={[user.homeLat, user.homeLng]}
        zoom={13.5}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <HomeMapRunView user={user} />
      </MapContainer>
    )
  );
};

export default HomeMap;
