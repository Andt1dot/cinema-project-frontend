import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../../assets/logo/olymp.png";
import logo2 from "../../assets/logo/olymp-cinema-logo.png";
import logo3 from "../../assets/logo/cinema.png";
import "./index.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="container ">
        <header className="d-flex flex-wrap align-items-center justify-content-center  py-3 mb-4 border-bottom">
          <Link to="/">
            <div className="logo-wrapper">
              <img src={logo1} className="logo" alt="cinema" />
              <img src={logo2} className="logo" alt="logo" />
              <img src={logo3} className="logo" alt="olymp" />
            </div>
          </Link>
        </header>
      </div>

      <div className="container ">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
          <NavLink
            exact
            to="/"
            className="d-flex align-items-center col-md-2 mb-2 mb-md-0 link-dark text-decoration-none"
          >
            Rezerveaza
          </NavLink>

          <ul className="nav col-12 col-md-8 mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink exact to="/" className="nav-link px-2 link-secondary">
                Acasa
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/" className="nav-link px-2 link-dark">
                Program
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/" className="nav-link px-2 link-dark">
                Noutati
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/" className="nav-link px-2 link-dark">
                Promotii
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/" className="nav-link px-2 link-dark">
                Contacte
              </NavLink>
            </li>
          </ul>

          <div className="dropdown col-md-2 text-end link-dark">
            <a
              href="/"
              className="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profil
            </a>
            <ul
              className="dropdown-menu text-small"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <NavLink exact to="/login" className="dropdown-item">
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/" className="dropdown-item">
                  Setari
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/" className="dropdown-item">
                  Info
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <NavLink exact to="/" className="dropdown-item">
                  Sign out
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Menu;
