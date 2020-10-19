import React from 'react';
import { Link } from "react-router-dom";
import IconCard from '../icon_card/icon_card';
import internet from '../images/internet_grey.png';
import subscription from '../images/subscription_grey.png';
import create from '../images/create_grey.png';
import revenue from '../images/revenue_grey.png';
import comunity from '../images/comunity_grey.png';
import marketing from '../images/marketing_grey.png';
import content from '../images/content_grey.png';
import './tools_menu.css';

function ToolsMenu() {

  // const handlePath = (path) => {
  //   if(window.location.pathname === path)
  //     return 'banner-link-selected'
  // }

  const handleClick = (e) => {
    console.log(e.target)
    const elArray = document.getElementById('tools-link').getElementsByTagName("img");

  }

  return (
    <div className="tools-menu" id="tools-link">
      <Link to="/setup" onClick={handleClick} id="setup"  >
        <IconCard
          img={internet}
          label="Set up your travel blog"
          className="active"
        />
      </Link>
      <Link to="/subscription" onClick={handleClick} id="subscription"  >
        <IconCard
          img={subscription}
          label="Set up your subscription payment plan"
          className="active"
        />
        </Link>
      <Link to="/guides" onClick={handleClick} id="guide" >
        <IconCard
          img={create}
          label="Create courses or guides"
          className="active"
        />
      </Link>
      <Link to="/revenue" onClick={handleClick} id="revenue" >
        <IconCard
          img={revenue}
          label="Revenue strategies"
        />
      </Link>
      <Link to="/comunity" onClick={handleClick} id="comunity" >
        <IconCard
          img={comunity}
          label="Comunity management"
        />
      </Link>
      <Link to="/marketing" onClick={handleClick} id="marketing" >
        <IconCard
          img={marketing}
          label="Marketing tools"
        />
      </Link>
      <Link to="/content" onClick={handleClick} id="content" >
        <IconCard
          img={content}
          label="Content Guidlines"
        />
      </Link>

    </div>
  );
}

export default ToolsMenu;
