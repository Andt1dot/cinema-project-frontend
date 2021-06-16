import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../../assets/logo/olymp.png";
import logo2 from "../../assets/logo/olymp-cinema-logo.png";
import logo3 from "../../assets/logo/cinema.png";
import "./index.css";

const Menu = () => {
  return (
    <div className="menu ">
      <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center py-3 mb-4 border-bottom">
          <Link to="/">
            <div className="logo-wrapper">
              <img src={logo1} className="logo" alt="cinema" />
              <img src={logo2} className="logo" alt="logo" />
              <img src={logo3} className="logo" alt="olymp" />
            </div>
          </Link>
        </header>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark "
        aria-label="Tenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample08"
            aria-controls="navbarsExample08"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample08"
          >
            <ul className="navbar-nav">
              <li className="nav-item custom-link">
                <NavLink exact to="/" className="nav-link " aria-current="page">
                  Program
                </NavLink>
              </li>
              <li className="nav-item custom-link">
                <NavLink exact to="/" className="nav-link ">
                  Noutati
                </NavLink>
              </li>
              <li className="nav-item custom-link">
                <NavLink
                  exact
                  to="/"
                  className="nav-link "
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Promotii
                </NavLink>
              </li>
              <li className="nav-item dropdown custom-link">
                <NavLink
                  exact
                  to="/"
                  className="nav-link dropdown-toggle "
                  id="dropdown08"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sign In
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="dropdown08">
                  <li>
                    <NavLink exact to="/login" className="dropdown-item">
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/profile" className="dropdown-item">
                      Contul meu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/logout" className="dropdown-item">
                      Sign out
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
