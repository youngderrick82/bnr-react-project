import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';

const Waitlist = () => {
  
    useEffect(() => {
        document.title = "Black Nerd Rises - Merch Waitlist";
      }, []);

  return (

    <div className="waitlist-container">
    <h1 className="page-header" style ={{ color: 'white'}}>Merch Coming Soon</h1>
    <Paper className="waitlist-paper">
    <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <div id="mc_embed_signup">
        <form action="https://gmail.us9.list-manage.com/subscribe/post?u=1a2342324f254c58fd790de12&amp;id=f0eefa8d11&amp;f_id=00291ee1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
          <div id="mc_embed_signup_scroll">
            <h2 style={{ paddingTop: '1vh' }}>Join Our Merch Waitlist</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email<span className="asterisk">*</span></label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="true" autoComplete='on'/>
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input type="text" name="b_1a2342324f254c58fd790de12_f0eefa8d11" tabIndex="-1" value="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                <p style={{ margin: '0px auto' }}>
                  <a href="http://eepurl.com/iA2tCs" title="Mailchimp - email marketing made easy and fun">
                    <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                      <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Paper>
    </div>
  );
};

export default Waitlist;
