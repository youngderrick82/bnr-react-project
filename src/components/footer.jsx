import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import {
  faTwitch,
  faSquareFacebook,
  faTiktok,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  useEffect(() => {
    // Load Mailchimp script
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    script.onload = () => {
      window.fnames = [];
      window.ftypes = [];
      window.fnames[0] = "EMAIL";
      window.ftypes[0] = "email";
      // Add other fnames and ftypes here if needed
    };

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <Grid container spacing={3}>
          <Grid
            className="quick-links footer-items"
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            item
          >
            <h3 className="footer-header">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a href="pages/events">Schedule</a>
              </li>
              <li>
                <a href="pages/team">About the Team</a>
              </li>
              <li>
                <a href="pages/contactus">Contact-Us</a>
              </li>
              <li>
                <a href="pages/merch">Merch</a>
              </li>
            </ul>
          </Grid>
          <Grid
            className="footer-about footer-items"
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            item
          >
            <h3 className="footer-header">Connect with Us</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a target="_blank" href="https://www.twitch.tv/blacknerdrises">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faTwitch} /> Twitch
                  </span>
                </a>
              </li>
              <li className="footer-list-item">
                <a target="_blank" href="https://youtube.com/@blacknerdrises">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faYoutube} /> Youtube
                  </span>
                </a>
              </li>
              <li className="footer-list-item">
                <a target="_blank" href="https://tiktok.com/@blacknerdrises">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faTiktok} /> TikTok
                  </span>
                </a>
              </li>
              <li className="footer-list-item">
                <a
                  target="_blank"
                  href="https://www.instagram.com/blacknerdrise/"
                >
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </span>
                </a>
              </li>
              <li className="footer-list-item">
                <a
                  target="_blank"
                  href="https://www.facebook.com/blacknerdrises"
                >
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faSquareFacebook} /> Facebook
                  </span>
                </a>
              </li>
            </ul>

            {/* <h3 className="footer-header">About Black Nerd Rises</h3>
            <h4 className="footer-subheader">Where Fandom Flourishes & Gaming Gets Real</h4>
            <p>Black Nerd Rises is more than a group; we're a movement. Born from a passion for all things geek, we are a collective of creators, entertainers, and advocates for the nerd culture. From the heart-pumping excitement of anime conventions to the strategic depths of gaming, we bring you an experience like no other. Join us as we celebrate the diversity of nerd culture and break the barriers one panel, one stream, one game at a time.</p> */}
          </Grid>
          <Grid
            className="footer-subscribe footer-items"
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            item
          >
            <h3 className="footer-header">Subscribe to BNR Newsletter</h3>
            <div id="mc_embed_signup">
              <form
                action="https://blacknerdrises.us9.list-manage.com/subscribe/post?u=1a2342324f254c58fd790de12&amp;id=f0eefa8d11&amp;f_id=00291ee1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email</label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="email"
                      id="mce-EMAIL"
                      required
                    />
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_1a2342324f254c58fd790de12_f0eefa8d11"
                      tabIndex="-1"
                    />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  );
}

export default Footer;
