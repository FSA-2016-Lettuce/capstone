import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#673ab7',
    },
  },
});

export default theme;
