import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import { useSelector } from "react-redux";
import AboutPremiere from "./pages/AboutPremiere";
const App = () => {
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route path="/about-premiere/:id" component={AboutPremiere} />
        <Route path="/movie-add" component={AddMovie} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
