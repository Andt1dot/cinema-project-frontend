import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import MoviesList from "../../pages/Movie/MoviesList";
import AddMovie from "../../pages/Movie/AddMovie";
import SingleMovie from "../../pages/Movie/SingleMovie";
import logo1 from "../../assets/logo/olymp.png";
import logo2 from "../../assets/logo/olymp-cinema-logo.png";
import logo3 from "../../assets/logo/cinema.png";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="main-container">
      <header className="navbar navbar-dark header-style sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 " to="/">
          <div className="logo-wrapp">
            <img src={logo1} className="company-logo" alt="cinema" />
            <img src={logo2} className="company-logo" alt="logo" />
            <img src={logo3} className="company-logo" alt="olymp" />
          </div>
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/logout">
              Sign out
            </a>
          </li>
        </ul>
      </header>
      <div className="container-fluid ">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar  collapse"
          >
            <div className="position-sticky sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active listItem"
                    aria-current="page"
                    href="/admin"
                  >
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/orders">
                    <span data-feather="file"></span>
                    Users
                  </a>
                </li>
                <li className="nav-item ">
                  <NavLink
                    exact
                    to="/admin/movies"
                    className="nav-link listItem"
                  >
                    <span data-feather="shopping-cart"></span>
                    Movies
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/customers">
                    <span data-feather="users"></span>
                    Premieres
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/reports">
                    <span data-feather="bar-chart-2"></span>
                    Reservations
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Tickets
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    News
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Notifications
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Cinemas
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Halls
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link listItem" href="/integr">
                    <span data-feather="layers"></span>
                    Seats
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Reports</span>
                <a
                  className="link-secondary listItem"
                  href="/saved"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link listItem" href="/current">
                    <span data-feather="file-text"></span>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link listItem" href="/lastquarter">
                    <span data-feather="file-text"></span>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link listItem" href="/social">
                    <span data-feather="file-text"></span>
                    Personel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link listItem" href="/sales">
                    <span data-feather="file-text"></span>
                    Sales
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 ">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>

            <div className="main-div">
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
                  path="/admin/movies/:movie_id"
                  render={(props) => <SingleMovie {...props} />}
                />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </div> //main-container
  );
};

export default Dashboard;
