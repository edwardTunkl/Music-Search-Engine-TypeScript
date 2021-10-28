import React from "react";
import {
  Navbar,
  Nav,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "../search.css";
import {IoIosFlash } from "react-icons/io";


export default function NavBarComponent() {
  return (
    <div>
      <Navbar bg="info" expand="lg">
        <Container id="search-container">
          <Navbar.Brand id="engine-name">
          <IoIosFlash className="nav-icon"/><span className="title">80ies</span><IoIosFlash className="nav-icon"/> Search-Engine
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="text-warning shaddow ml-2" id="navi">
                Home
              </Nav.Link>
              <Nav.Link id="navi" className="text-warning shaddow">
                Details
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
