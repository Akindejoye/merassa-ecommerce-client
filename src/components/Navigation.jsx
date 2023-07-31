import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Ecomern</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
