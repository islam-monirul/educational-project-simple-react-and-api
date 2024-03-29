import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
     // link style modification function
     const defaultStyle = {
          color: "#000",
          textDecoration: "none"
     };

     const activeStyle = {
          color: "#0d6efd"
     }

     return (
          <Navbar bg="light" style={{borderBottom: "2px solid #f0f0f0"}} expand="lg">
               <Container>
                    <Navbar.Brand style={{color: "#0d6efd", fontWeight: "500"}}>Coding Universe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="ms-auto">
                              <Nav.Link>
                                   <NavLink style={defaultStyle} activeStyle={activeStyle} to="/home">Home</NavLink>
                              </Nav.Link>
                              <Nav.Link>
                                   <NavLink style={defaultStyle} activeStyle={activeStyle} to="/about">About Us</NavLink>
                              </Nav.Link>
                              <Nav.Link>
                                   <NavLink style={defaultStyle} activeStyle={activeStyle} to="/services">Services</NavLink>
                              </Nav.Link>
                              <Nav.Link>
                                   <NavLink style={defaultStyle} activeStyle={activeStyle} to="/contact">Contact</NavLink>
                              </Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
};

export default Header;