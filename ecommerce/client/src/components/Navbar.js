// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? 'nav-link active text-warning fw-bold' : 'nav-link text-light';
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-warning">
          🛍️ ShopSmart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Link className={getActiveClass('/')} to="/">Home</Link>
            <Link className={getActiveClass('/cart')} to="/cart">Cart</Link>
            <Link className={getActiveClass('/login')} to="/login">Login</Link>
            <Link className={getActiveClass('/signup')} to="/signup">Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
