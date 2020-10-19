import React from 'react';
import { CURRENT_YEAR } from '../../config';
import logo from '../images/globuzzer_logo.png';
import facebook from '../images/facebook_icon.png';
import twitter from '../images/twitter.png';
import pinterest from '../images/pinterest.png';
import './footer.css';


function Footer() {
  return (
    <React.Fragment>
    <footer className="footer">
        <header>
          <img src={logo} alt="logo" />
        </header>

        <nav className="footer-menu">
          <ul>
            <li>Skyttevägen 29, Saltsjöbaden, Sweden </li>
            <li>+46 73 555 5 134</li>
            <li>info@globuzzer.com</li>
            <li style={{ paddingTop: "50px" }}>
               © { CURRENT_YEAR }  Globuzzer. All rights reserved
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
            <div className="follow-icons">
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
          </ul>
        </nav>
      </footer>

      <footer className="footer-small">
        <header>
          <img src={logo} alt="logo" />
        </header>

        <nav className="footer-small-menu">
          <ul>
            <li>Skyttevägen 29, Saltsjöbaden, Sweden </li>
            <li>+46 73 555 5 134</li>
            <li>info@globuzzer.com</li>

            <li>
              <img src={facebook} alt="facebook" />

              <img src={twitter} alt="twitter" />

              <img src={pinterest} alt="pinterest" />
            </li>

            <li style={{ paddingTop: "50px" }}>© { CURRENT_YEAR }  Globuzzer. All rights reserved</li>
          </ul>
        </nav>
      </footer>
  </React.Fragment>
  );
}

export default Footer;
