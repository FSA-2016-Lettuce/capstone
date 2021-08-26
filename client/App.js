import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Navbar from './components/Navbar';
import MainDrawer from './components/MainDrawer';
import Routes from './Routes';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainDrawer />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
