import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo_1 from "../assets/logo/cinema.png";
import logo_2 from "../assets/logo/olymp.png";
import logo_3 from "../assets/logo/olymp-cinema-logo.png";

const Nav = styled.div`
    display: flex,
    flex-direction: row;
    background: #141414;
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: row ;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
  color: white;
  
  .logo {
    flex: 2;
}
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
const NavLinksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  list-style: none;
`;

const StyledLink = styled.li`
  padding: 10px;
  color: #bdbab3;
  text-decoration: none;
  font-family: "Gugi", cursive;
  font-size: 16px;
  font-weight: bold;
  transition: 0.25s;

  :hover,
  :focus {
    transform: translateY(-0.25em);
  }
`;

const StyledImg = styled.img`
  height: 40px;
`;
const StyledLogo = styled.img`
  height: 50px;
  padding: 5px;
`;

const Menu = () => {
  return (
    <Nav>
      <Navbar>
        <Link to="/" className="logo" style={{ textDecoration: "none" }}>
          <StyledImg src={logo_2} />
          <StyledLogo src={logo_3} />
          <StyledImg src={logo_1} />
        </Link>
        <NavLinksWrapper>
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            <StyledLink>Acasa</StyledLink>
          </NavLink>
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            <StyledLink>Program</StyledLink>
          </NavLink>
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            <StyledLink>Noutati</StyledLink>
          </NavLink>
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            <StyledLink>Promotii</StyledLink>
          </NavLink>
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            <StyledLink>Profilul Meu</StyledLink>
          </NavLink>
        </NavLinksWrapper>
      </Navbar>
    </Nav>
  );
};

export default Menu;
