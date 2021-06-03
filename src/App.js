import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./components/Menu";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
