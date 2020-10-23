import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import IconCard from "../icon_card/icon_card";
import { dataMenu } from "./data";
import "./tools_menu.css";

function ToolsMenu({ location }) {
  const [data] = useState(dataMenu);


  const linkStyle = (d) => {
    return {
      border: location.pathname.replace("/", "") === d.path && "3px solid #f24b6a",
      borderRadius: location.pathname.replace("/", "") === d.path && "15px"
    };
  };

  return (
    <div className="tools-menu" id="tools-link">
      {data.map((d) => (
        <Link to={`/${d.path}`} key={d.id} >
        <div style={linkStyle(d)}>
          <IconCard img={d.img} label={d.label} />
        </div>
        </Link>
      ))}
    </div>
  );
}
export default withRouter(ToolsMenu);
