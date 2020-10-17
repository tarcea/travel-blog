import React from 'react';
import './menu.css';
import logo from '../images/globuzzer_watermark.png';


function Menu() {
  return (
    <div className="top-menu">
    <div className="menu-container">
      <header>
        <img src={logo} alt="logo" className="menu-logo"/>
      </header>
      <div className="menu-links">
        <ul>
          <li>Testimonials</li>
          <li>Contact us</li>
          <li className="selected" style={{color: '#F24B6A'}} >Get started</li>
        </ul>
      </div>
      </div>
      <hr className="menu-underline" />
    </div>
  );
}

export default Menu;
