import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const dummyData = [
  {
    id: 1,
    coordinates: [40.759253, -73.774953],
    name: 'First Point',
  },
  {
    id: 2,
    coordinates: [40.779, -73.68],
    name: 'Second Point',
  },
  {
    id: 3,
    coordinates: [40.76, -73.6],
    name: 'Third Point',
  },
];

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '50vh',
  },
}));

export default function HomeMap() {
  const classes = useStyles();
  return (
    <MapContainer
      className={classes.mapContainer}
      center={[40.759253, -73.65]}
      zoom={10.5}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {dummyData.map((point) => (
        <Marker key={point.id} position={point.coordinates}>
          <Popup>
            <div>
              <h2>{point.name}</h2>
              <button type="button" onClick={() => console.log('hello!')}>
                Press Me!
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

// const position = [51.505, -0.09]
// return (
//   <MapContainer
//     style={{ height: '500px' }}
//     center={[51.505, -0.09]}
//     zoom={13}
//     scrollWheelZoom={false}
//   >
//     <TileLayer
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={[51.505, -0.09]}>
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
//   </MapContainer>
// );
// }

//   var mymap = L.map('mapid').setView([40.759253, -73.774953], 7.5);

//   L.tileLayer(
//     'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
//     {
//       maxZoom: 18,
//       attribution:
//         'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//       id: 'mapbox/streets-v11',
//       tileSize: 512,
//       zoomOffset: -1,
//     }
//   ).addTo(mymap);

//   L.marker([51.5, -0.09])
//     .addTo(mymap)
//     .bindPopup('<b>Hello world!</b><br />I am a popup.');
//   // .openPopup();
//   //the below code allows us to customize a pin (should we decide to go with a circle shaped pin-drop)

//   L.circle([40.759253, -73.774953], 500, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//   })
//     .addTo(mymap)
//     .bindPopup('What up lettuce!')

//     // L.polygon([
//     //   [40.459253, -73.774953],
//     //   [40.759253, -73.774953],
//     //   [40.759253, -74.774953],
//     // ])
//     .addTo(mymap)
//     .bindPopup('I am a polygon.');

//   var popup = L.popup();

//   L.marker([40.789253, -73.772953])
//     .addTo(mymap)
//     .bindPopup('Team Lettuce is running these streets!');

// }
