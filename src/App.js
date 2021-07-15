import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import AboutPremiere from "./pages/AboutPremiere";
import PrivateRoute, { AdminRoute } from "./components/PrivateRoute";
import Reservation from "./pages/Reservation";
import AdminPage from "./pages/AdminPage";
<<<<<<< HEAD
import CheckRegister from "./actions/Auth/CheckRegister";
import ResetPassword from "./pages/ResetPassword";
=======
import NewsPage from "./pages/NewsPage";
>>>>>>> 6ab4410f7f3bbf34dfa3f778de5512104f1699e7

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, isAdmin } = useSelector((state) => ({
    isAuthenticated: state.Auth.isAuthenticated,
    isAdmin: state.Auth.isAdmin,
  }));

  useEffect(() => {
    dispatch(CheckRegister());
  }, [isAuthenticated, isAdmin]);
  console.log(isAuthenticated, isAdmin);
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <PrivateRoute
          path="/reservation/:premiere_id/:cinema_id/:hall_id"
          isAuthenticated={isAuthenticated}
          render={(props) => <Reservation {...props} />}
        />

        <AdminRoute
          path="/admin"
          isAuthenticated={isAuthenticated}
          isAdmin={isAdmin}
          render={(props) => <AdminPage {...props} />}
        />

        <Route path="/about-premiere/:id" component={AboutPremiere} />
        <Route path="/news" component={NewsPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password/:id" component={ResetPassword} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
