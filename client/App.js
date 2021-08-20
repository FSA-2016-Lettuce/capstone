import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import Routes from './Routes';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import HomeMap from './components/HomeMap';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer />
      {/* <HomeMap /> */}
      <MapContainer
        style={{ height: '500px' }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </ThemeProvider>
  );
};

export default App;
