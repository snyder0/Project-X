import React from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/theme/theme-default";
import Routes from "./router/Routes";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <Switch>
            <Routes />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
