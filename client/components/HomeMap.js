import React from 'react';
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';
import PopupData from './PopupData';
import HomeMapRunView from './HomeMapRunView';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '60vh',
  },
}));

const HomeMap = (props) => {
  const classes = useStyles();
  const user = props.user;

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
