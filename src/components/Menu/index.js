import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo/olymp.png";
import logo2 from "../../assets/logo/olymp-cinema-logo.png";
import logo3 from "../../assets/logo/cinema.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./index.css";

const Menu = () => {
  const onCilckLogOut = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };

  return (
    <div className="menu">
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
          <div
            className="navbar-collapse justify-content-md-center"
            id="navbarsExample08"
          >
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey="1" className="mr-auto">
                  <Nav.Item className="custom-link">
                    <Nav.Link eventKey="1" href="/">
                      Program
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="custom-link">
                    <Nav.Link eventKey="2" href="/news">
                      Noutati
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="custom-link">
                    <Nav.Link eventKey="3" href="/">
                      Contacte
                    </Nav.Link>
                  </Nav.Item>
                  <NavDropdown
                    title="Action"
                    id="nav-dropdown"
                    className="custom-link"
                  >
                    {localStorage.getItem("token") ? (
                      <NavDropdown.Item
                        eventKey="4.1"
                        onClick={onCilckLogOut}
                        href={"/logout"}
                      >
                        Sign Out
                      </NavDropdown.Item>
                    ) : (
                      <NavDropdown.Item eventKey="4.2" href="/login">
                        Sign In
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Item eventKey="4.3" href="/login">
                      Setari
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.4" href="/login">
                      Contul Meu
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
