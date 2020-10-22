import React from 'react';
// import { IconContext } from "react-icons";
// import { AiOutlineGlobal } from 'react-icons/ai';
import './icon_card.css'

function IconCard({ className, id, img, alt, label }) {
  return (
    <div className="card-frame">
      <div className={className} id={id}>
        <img src={img} alt={alt} />

      </div>
      <div className="card-label">
        <p>{label}</p>
      </div>
    </div>
  );
}

export default IconCard;
