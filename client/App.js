import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MainDrawer from './components/MainDrawer';
import Routes from './Routes';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <MainDrawer />
        <Routes />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
