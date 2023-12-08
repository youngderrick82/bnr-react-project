import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import flameAnimation from "../pages/assets/Animation - 1701563940606.json";
import axios from "axios";

function Header() {
  const [isLive, setIsLive] = useState(false);
  const [token, setToken] = useState("");

  const options = {
    animationData: flameAnimation,
    loop: true,
  };

  const fetchToken = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/get-twitch-token`
      );
      console.log("Fetched token:", response.data.access_token);
      setToken(response.data.access_token);
    } catch (error) {
      console.error("Error fetching Twitch token:", error);
    }
  };

  const fetchLiveStatus = () => {
    fetch("https://api.twitch.tv/helix/streams?user_login=blacknerdrises", {
      headers: {
        "Client-ID": process.env.REACT_APP_TTV_CLIENT_ID,
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
      },
    })
      .then((res) => {
        console.log(res.json);
        return res.json();
      })
      .then((d) => {
        if (!d.data == []) {
          console.log(d.data);
          setIsLive(false);
        } else {
          setIsLive(true);
        }
      });
  };

  const streamIndicator = () => {
    return isLive ? (
      <Nav className="stream-link">
        <Nav.Link
          className="stream-live"
          target="_blank"
          href="https://www.twitch.tv/blacknerdrises"
        >
          Live Now 
        </Nav.Link>
      </Nav>
    ) : (
      <Nav className="stream-link">
        <Nav.Link className="stream-not-live">Stream Offline</Nav.Link>
      </Nav>
    );
  };

  useEffect(() => {
    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      fetchLiveStatus();
    }
  }, [token]);

  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container fluid className="d-flex justify-content-between">
        <LinkContainer className="" to={"/"}>
          <Navbar.Brand>Black Nerd Rises</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav spacing="" className="main-nav-links">
            {/* <LinkContainer className="nav-link" to={"/"}>
              <Nav.Link bsPrefix="nav-link">Home</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to={"pages/events/"}>
              <Nav.Link bsPrefix="nav-link">Schedule</Nav.Link>
            </LinkContainer>
            <NavDropdown
              className="nav-link"
              title="About Us"
              id="collapsible-nav-dropdown"
            >
              <Nav.Link
                className="nav-link2 navbar-collapse"
                as={Link}
                to={"pages/team/"}
              >
                Meet the Team
              </Nav.Link>
              <Nav.Link
                className="nav-link2 navbar-collapse"
                as={Link}
                to={"pages/contactus/"}
              >
                Contact Us
              </Nav.Link>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
            </NavDropdown>
            <LinkContainer to={"pages/merch/"}>
              <Nav.Link>Merch</Nav.Link>
            </LinkContainer>
          </Nav>
          {streamIndicator()}
          {/* <Nav.Link className="stream-link" href="#deets">Streaming</Nav.Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
