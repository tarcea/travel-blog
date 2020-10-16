import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineGlobal } from 'react-icons/ai';
import './icon_card.css'

function IconCard(props) {
  return (
    <div className="card-frame">
      <div className="card-icon">
        <IconContext.Provider value={{ color: "#F24B6A", className: "global-class-name"}}>
          <div>
            <AiOutlineGlobal />
          </div>
        </IconContext.Provider>
      </div>
      <div className="card-label">
        <p>Set up your travel blog</p>
      </div>
    </div>
  );
}

export default IconCard;
