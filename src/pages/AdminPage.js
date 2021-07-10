import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ZingChart from "zingchart-react";
import Dashboard from "../components/Dashboard";
import MoviesList from "./Movie/MoviesList";
import AddMovie from "./Movie/AddMovie";
import EditMovie from "./Movie/EditMovie";
import SingleMovie from "./Movie/SingleMovie";
import chartFirst from "../components/Dashboard/Charts/ChartFirst";
import chartSecond from "../components/Dashboard/Charts/ChartSecond";
import chartThird from "../components/Dashboard/Charts/ChartThird";

const AdminPage = () => {
  const [moviesChart, setMoviesChart] = useState({});
  const [usersChart, setUsersChart] = useState({});
  const [metricsChart, setMetricsChart] = useState({});

  useEffect(() => {
    setMoviesChart(chartFirst);
    setUsersChart(chartSecond);
    setMetricsChart(chartThird);
  }, []);

  //console.log("chart: ", chart);
  return (
    <>
      <Dashboard>
        <Switch>
          <Route
            exact
            path="/admin/movies"
            render={(props) => <MoviesList {...props} />}
          />
          <Route
            exact
            path="/admin/movies/movie-add"
            render={(props) => <AddMovie {...props} />}
          />
          <Route
            exact
            path="/admin/movies/movie-edit/:movie_id"
            render={(props) => <EditMovie {...props} />}
          />
          <Route
            exact
            path="/admin/movies/:movie_id"
            render={(props) => <SingleMovie {...props} />}
          />
          <Route
            exact
            path="/admin"
            render={(props) => (
              <div>
                <ZingChart {...props} data={moviesChart.config} />
                <ZingChart {...props} data={usersChart.config} />
                <ZingChart {...props} data={metricsChart.config} />
              </div>
            )}
          />
        </Switch>
      </Dashboard>
    </>
  );
};

export default AdminPage;
