import React from "react";

import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Routes from "./Routes";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer />
    </ThemeProvider>
  );
};

export default App;
