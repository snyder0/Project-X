import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import HomeIcon from "@material-ui/icons/HomeSharp";
import InfoIcon from "@material-ui/icons/InfoSharp";

interface IRoute {
  name: string;
  icon?: React.ComponentType;
  path: string;
  component: React.FC;
}

export const routes: Array<IRoute> = [
  {
    name: "Home",
    icon: HomeIcon,
    path: "/",
    component: Home
  },
  {
    name: "Login",
    icon: InfoIcon,
    path: "/login",
    component: Login
  }
];

const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          exact
          key={index}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;
