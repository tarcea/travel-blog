import React from 'react';
// import { IconContext } from "react-icons";
// import { AiOutlineGlobal } from 'react-icons/ai';
import './icon_card.css'

function IconCard(props) {
  return (
    <div className="card-frame">
      <div className="card-icon">
        <img src={props.img} alt="icon" />
      </div>
      <div className="card-label">
        <p>{props.label}</p>
      </div>
    </div>
  );
}

export default IconCard;
