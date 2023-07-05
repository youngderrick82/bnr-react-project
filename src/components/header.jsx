import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark .bg-gradient">
      <Container fluid>
        <LinkContainer className="navbar-brand" to={"/"}>
          <Navbar.Brand>Black Nerd Rises</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-white">
            <LinkContainer className="nav-link" to={"/"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"pages/events/"}>
              <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <NavDropdown
              className="nav-link"
              title="About Us"
              id="collasible-nav-dropdown"
              >
             <NavDropdown.Item><Link className="nav-link2" to={"pages/team/"}>Meet the Team</Link></NavDropdown.Item>
              <NavDropdown.Item></NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Streaming</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
