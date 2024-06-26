import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";

// Header component
const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        {/* All the various header links */}
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faVideo} className="video-icon-title" /> Ripe
          Mangoes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link">
              Browse
            </NavLink>
            <NavLink to="/watchList" className="nav-link">
              Watch List
            </NavLink>
          </Nav>
          {/* Checking if user logged in then remove the Login and Register buttons */}
          {!isLoggedIn && (
            <>
              <NavLink to="/login" className="nav-link-button">
                <Button variant="outline-info">Login</Button>
              </NavLink>
              <NavLink to="/register" className="nav-link-button">
                <Button variant="outline-info">Register</Button>
              </NavLink>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
