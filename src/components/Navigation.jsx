import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
import "./Navigation.css";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Ecommerce</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>Dashboard</NavDropdown.Item>
              <NavDropdown.Item>Dashboard</NavDropdown.Item>
              <NavDropdown.Item>Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Dashboard</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
