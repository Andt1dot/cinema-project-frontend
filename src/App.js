import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import { useSelector } from "react-redux";

const App = () => {
  const { movies } = useSelector((state) => ({
    movies: state.Movie.movies,
  }));

  console.log("Movies[]: ", movies);

  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route path="/movie-add" component={AddMovie} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
