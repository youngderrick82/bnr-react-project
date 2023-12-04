import React, { useEffect } from "react";
import { Grid } from "@mui/material";

function Footer() {
  useEffect(() => {
    // Load Mailchimp script
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    script.onload = () => {
      window.fnames = new Array();
      window.ftypes = new Array();
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
            <a href="pages/events">
              <p>Schedule</p>
            </a>
            <a href="pages/team">
              <p>About the Team</p>
            </a>
            <a href="pages/contactus">
              <p>Contact-Us</p>
            </a>
            <a href="pages/merch">
              <p>Merch</p>
            </a>
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
              <li>
                <a>
                  <span> Twitch</span>
                </a>
              </li>
              <li>
                <a>
                  <span> Youtube</span>
                </a>
              </li>
              <li>
                <a>
                  <span> Facebook</span>
                </a>
              </li>
              <li>
                <a>
                  <span> Discord</span>
                </a>
              </li>
              <li>
                <a>
                  <span> Instagram</span>
                </a>
              </li>
              <li>
                <a>
                  <span> X</span>
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
