import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <>
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
              <NavLink exact to="/admin/users" className="nav-link listItem">
                <span data-feather="file"></span>
                Users
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink exact to="/admin/movies" className="nav-link listItem">
                <span data-feather="shopping-cart"></span>
                Movies
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                exact
                to="/admin/premieres"
                className="nav-link listItem"
              >
                <span data-feather="shopping-cart"></span>
                Premieres
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink exact to="/admin/news" className="nav-link listItem">
                <span data-feather="layers"></span>
                News
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                exact
                to="/admin/reservations"
                className="nav-link listItem"
              >
                <span data-feather="bar-chart-2"></span>
                Reservations
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink exact to="/admin/tickets" className="nav-link listItem">
                <span data-feather="layers"></span>
                Tickets
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink
                exact
                to="/admin/notifications"
                className="nav-link listItem"
              >
                <span data-feather="layers"></span>
                Notifications
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink exact to="/admin/cinemas" className="nav-link listItem">
                <span data-feather="layers"></span>
                Cinemas
              </NavLink>
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
                Sales
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link listItem" href="/sales">
                <span data-feather="file-text"></span>
                Metrics
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
