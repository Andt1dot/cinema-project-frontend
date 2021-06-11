import React, { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:4000/api/auth/check-auth`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.status(200))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/movie-add" component={AddMovie} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
