import React from 'react';
import { CURRENT_YEAR } from '../../config';
import globe from '../images/globe.png';
import logo from '../images/globuzzer_logo.png';
import facebook from '../images/facebook_icon.png';
import twitter from '../images/twitter.png';
import pinterest from '../images/pinterest.png';
import './footer.css';

function Footer() {
  return (
    <React.Fragment>
      <div className="own-section">
        <div className="own-left">
          <img src={globe} alt="globe" />
        </div>

        <div className="own-right">
          <div className="own-right-big">
            <p>Want to have your own</p>
            <p>secton?</p>
          </div>

          <div className="own-right-small">
            <p>Become a part of our global community!</p>
            <p>Apply to start your own travel blog</p>
          </div>

          <button>Start now</button>
        </div>
      </div>

      <footer className="footer">
        <header>
          <img src={logo} alt="logo" />
        </header>

        <nav className="footer-menu">
          <ul>
            <li>Backängsvägen 24 </li>
            <li>192 73 Sollentuna, Sweden</li>
            <li>+46 73 555 5 134</li>
            <li>info@globuzzer.com</li>
            <li style={{ paddingTop: "50px" }}>
              { CURRENT_YEAR } Globuzzer All rights reserved
            </li>
          </ul>

          <ul>
            <li>Destinations</li>
            <li>Videos</li>
            <li>Articles</li>
            <li>Services</li>

            <li style={{ paddingTop: "10px" }}>Log in/Sign up</li>
          </ul>

          <ul>
            <li>About Globuzzer</li>
            <li>Contact us</li>
            <li>For companies</li>
          </ul>

          <ul>
            <li>FOLLOW US</li>
            <div>
              <span>
                <img src={facebook} alt="facebook" />
              </span>
              <span>
                <img src={twitter} alt="facebook" />
              </span>
              <span>
                <img src={pinterest} alt="facebook" />
              </span>
            </div>

            <div>
              <span>
                <img src={facebook} alt="facebook" />
              </span>
              <span>
                <img src={facebook} alt="facebook" />
              </span>
              <span>
                <img src={facebook} alt="facebook" />
              </span>
            </div>
          </ul>
        </nav>
      </footer>

      <footer className="footer-small">
        <header>
          <img src={logo} alt="logo" />
        </header>

        <nav className="footer-small-menu">
          <ul>
            <li>Backängsvägen 24 </li>
            <li>192 73 Sollentuna, Sweden</li>
            <li>+46 73 555 5 134</li>
            <li>info@globuzzer.com</li>

            <li>
              <img src={facebook} alt="facebook" />

              <img src={twitter} alt="twitter" />

              <img src={pinterest} alt="pinterest" />
            </li>

            <li>
              <img src={facebook} alt="facebook" />

              <img src={twitter} alt="twitter" />

              <img src={pinterest} alt="pinterest" />
            </li>

            <li style={{ paddingTop: "50px" }}>
              { CURRENT_YEAR } Globuzzer. All rights reserved
            </li>
          </ul>
        </nav>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
