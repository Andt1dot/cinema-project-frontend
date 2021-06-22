import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import AboutPremiere from "./pages/AboutPremiere";
import PrivateRoute, { AdminRoute } from "./components/PrivateRoute";
import Reservation from "./pages/Reservation";

const App = () => {
  const { isAuthenticated, isAdmin } = useSelector((state) => ({
    isAuthenticated: state.Auth.isAuthenticated,
    isAdmin: state.Auth.isAdmin,
  }));

  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <PrivateRoute
          path="/reservation"
          isAuthenticated={isAuthenticated}
          render={(props) => <Reservation {...props} />}
        />
        <AdminRoute
          path="/movie-add"
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          render={(props) => <AddMovie {...props} />}
        />
        <Route path="/about-premiere/:id" component={AboutPremiere} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
