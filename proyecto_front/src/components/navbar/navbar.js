import React from "react";
import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Novios.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <DropdownButton id="dropdown-basic-button" title="usuario">
                <Dropdown.Header>

                </Dropdown.Header>
              <Dropdown.Item href="#/action-1">Cerrar sesion</Dropdown.Item>
              {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
