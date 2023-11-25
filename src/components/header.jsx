import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container fluid className="d-flex justify-content-between">
        <LinkContainer className="navbar-brand" to={"/"}>
          <Navbar.Brand>Black Nerd Rises</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav spacing="" className="">
            <LinkContainer className="nav-link" to={"/"}>
              <Nav.Link bsPrefix="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"pages/events/"}>
              <Nav.Link bsPrefix="nav-link">Schedule</Nav.Link>
            </LinkContainer>
            <NavDropdown
              eventKey={3}
              className="nav-link"
              title="About Us"
              id="collapsible-nav-dropdown"
              >
             <NavDropdown.Item className="nav-link2 navbar-collapse" as={Link} eventKey={3.1} to={"pages/team/"}>Meet the Team</NavDropdown.Item>
              <Nav.Link className="nav-link2 navbar-collapse" as={Link} eventKey={3.2} to={""}>Contact Us</Nav.Link>    
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
            </NavDropdown>
            <LinkContainer to={"pages/merch/"}>
              <Nav.Link>Merch</Nav.Link>
            </LinkContainer>
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
