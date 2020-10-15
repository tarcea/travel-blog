import React from 'react';
import './footer.css';

const logo = '/images/globuzzer_logo.png';
const f_i = '/images/facebook_icon.png';
const twitter = '/images/twitter.png';
const pinterest = '/images/pinterest.png';

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
               © 2020  Globuzzer. All rights reserved
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
                <img src={f_i} alt="facebook" />
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
            <li>Backängsvägen 24 </li>
            <li>192 73 Sollentuna, Sweden</li>
            <li>+46 73 555 5 134</li>
            <li>info@globuzzer.com</li>

            <li>
              <img src={f_i} alt="facebook" />

              <img src={twitter} alt="twitter" />

              <img src={pinterest} alt="pinterest" />
            </li>

            <li style={{ paddingTop: "50px" }}>Globuzzer 2020</li>
          </ul>
        </nav>
      </footer>
  </React.Fragment>
  );
}

export default Footer;
