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
    const ids = "#setup, #subscription, #guide, #revenue, #comunity, #marketing, #content"
    const elArray = document.querySelectorAll(ids);
    elArray.forEach((element) => {
      element.classList.remove("active")
    })

    const k = e.target.innerText;
    console.log(k)
    const z = (k === "setup" ||
               k === "subscription" ||
               k === "guide" ||
               k === "revenue" ||
               k === "comunity" ||
               k === "marketing" ||
               k === "content");
    if (z) {
        e.target.classList.add("active")
    }

  }

  return (
    <div className="tools-menu" id="tools-link" onClick={handleClick}>
      <Link to="/setup" >
        <IconCard
          img={internet}
          label="Set up your travel blog"
          id="setup"
          className="active"
          alt="Set up your travel blog"
        />
      </Link>
      <Link to="/subscription"  >
        <IconCard
          img={subscription}
          label="Set up your subscription payment plan"
          id="subscription"
        />
        </Link>
      <Link to="/guides" >
        <IconCard
          img={create}
          label="Create courses or guides"
          id="guide"
        />
      </Link>
      <Link to="/revenue" >
        <IconCard
          img={revenue}
          label="Revenue strategies"
          id="revenue"
        />
      </Link>
      <Link to="/comunity" >
        <IconCard
          img={comunity}
          label="Comunity management"
          id="comunity"
        />
      </Link>
      <Link to="/marketing" >
        <IconCard
          img={marketing}
          label="Marketing tools"
          id="marketing"
        />
      </Link>
      <Link to="/content" >
        <IconCard
          img={content}
          label="Content Guidlines"
          id="content"
        />
      </Link>

    </div>
  );
}

export default ToolsMenu;
