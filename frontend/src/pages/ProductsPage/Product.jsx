import React from 'react';
import './Product.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Product() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Welcome to YK Shop!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">My Portfolio</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Discounts</Nav.Link>
            <NavDropdown title="All" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shop Woman</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop Man</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shop Kids</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.4">Someting...</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Product;