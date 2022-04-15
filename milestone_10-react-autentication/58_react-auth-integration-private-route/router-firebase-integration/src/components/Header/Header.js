import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import './Header.css'

const Header = () => {
  //assigning location variable
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="header">
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                className={splitLocation[1] === "" ? "active" : ""}
                to="/"
              >
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                as={Link}
                className={splitLocation[1] === "login" ? "active" : ""}
                to="/login"
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                className={splitLocation[1] === "register" ? "active" : ""}
                to="/register"
              >
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;