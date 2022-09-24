import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';

const NavbarP = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="success" variant="dark">
    <Container>
      <div href="/"><img className='logo_imgpng' src={logo} alt="Logo" /></div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link> <NavLink exact to="/" className="nav_link_items">Home</NavLink> </Nav.Link>
          <Nav.Link> <NavLink exact to="/about-us" className="nav_link_items">About Us</NavLink></Nav.Link>
          <NavDropdown title="Services" id="collasible-nav-dropdown" >
            <NavDropdown.Item><NavLink exact to="/services" className="nav_link_items nav_link_items_d">Steel Buildings</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink exact to="/services" className="nav_link_items nav_link_items_d">Design</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink exact to="/services" className="nav_link_items nav_link_items_d">Fabrication</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink exact to="/services" className="nav_link_items nav_link_items_d">Eraction</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink exact to="/services" className="nav_link_items nav_link_items_d">Land Scape</NavLink></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><NavLink exact to="/services" className="nav_link_items nav_link_items_d">Agricutural Products</NavLink></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link><NavLink exact to="/ourwork" className="nav_link_items">Our Work</NavLink></Nav.Link>
          <Nav.Link eventKey={2} ><NavLink exact to="/contact-us" className="nav_link_items">Contact Us</NavLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarP