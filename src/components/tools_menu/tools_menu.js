import React from 'react';
import { Link } from "react-router-dom";
import IconCard from '../icon_card/icon_card';
import internet from '../images/internet_grey.png';
import internet_red from '../images/internet_red.png';
import subscription from '../images/subscription_grey.png';
import subscription_red from '../images/subscription_red.png';
import create from '../images/create_grey.png';
import create_red from '../images/internet_red.png';
import revenue from '../images/revenue_grey.png';
import revenue_red from '../images/internet_red.png';
import comunity from '../images/comunity_grey.png';
import comunity_red from '../images/internet_red.png';
import marketing from '../images/marketing_grey.png';
import marketing_red from '../images/internet_red.png';
import content from '../images/content_grey.png';
import content_red from '../images/internet_red.png';
import './tool_menu.css';

function ToolsMenu() {

  // const handlePath = (path) => {
  //   if(window.location.pathname === path)
  //     return 'banner-link-selected'
  // }

  const handleClick = (e) => {
    console.log(e.target)
    const elArray = document.getElementById('tools-link').getElementsByTagName("img");
    for (let i = 0; i < elArray.length; i++) {
      switch(elArray[i].src) {
        case internet_red:
          elArray[i].src = internet
          break;
        case subscription_red:
          elArray[i].src = subscription
          break;
        case create_red:
          elArray[i].src = create
          break;
        case revenue_red:
          elArray[i].src = revenue
          break;
        case comunity_red:
          elArray[i].src = comunity
          break;
        case marketing_red:
          elArray[i].src = marketing
          break;
        case content_red:
          elArray[i].src = content
          break;
          default:
          break;
      }
    }
    switch(e.target.src) {
        case internet:
          e.target.src = internet_red
          break;
        case subscription:
          e.target.src = subscription_red
          break;
        case create:
          e.target.src = create_red
          break;
        case revenue:
          e.target.src = revenue_red
          break;
        case comunity:
          e.target.src = comunity_red
          break;
        case marketing:
          e.target.src = marketing_red
          break;
        case content:
          e.target.src = content_red
          break;
          default:
          break;
      }
  }

  return (
    <div className="tools-menu" id="tools-link">
      <Link to="/setup" onClick={handleClick} id="setup">
        <IconCard
          img={internet}
          red="/images/internet_red.png"
          label="Set up your travel blog"
        />
      </Link>
      <Link to="/subscription" onClick={handleClick} id="subscription">
        <IconCard
          img={subscription}
          label="Set up your subscription payment plan"
        />
        </Link>
      <Link to="/guides" onClick={handleClick} id="guide">
        <IconCard
          img={create}
          label="Create courses or guides"
        />
      </Link>
      <Link to="/revenue" onClick={handleClick} id="revenue">
        <IconCard
          img={revenue}
          label="Revenue strategies"
        />
      </Link>
      <Link to="/comunity" onClick={handleClick} id="comunity">
        <IconCard
          img={comunity}
          label="Comunity management"
        />
      </Link>
      <Link to="/marketing" onClick={handleClick} id="marketing">
        <IconCard
          img={marketing}
          label="Marketing tools"
        />
      </Link>
      <Link to="/content" onClick={handleClick} id="content">
        <IconCard
          img={content}
          label="Content Guidlines"
        />
      </Link>
    </div>
  );
}

export default ToolsMenu;
