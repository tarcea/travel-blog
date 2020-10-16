import React from 'react';
import IconCard from '../icon_card/icon_card';
import './tool_menu.css';

function ToolsMenu() {
  return (
    <div className="tools-menu">
      <IconCard
        img="/images/icons8-internet-100.png"
        label="Set up your travel blog"
      />
      <IconCard
        img="/images/subscription_red.png"
        label="Set up your subscription payment plan"
      />
      <IconCard
        img="/images/create_grey.png"
        label="Create courses or guides"
      />
      <IconCard
        img="/images/revenue_grey.png"
        label="Revenue strategies"
      />
      <IconCard
        img="/images/comunity_grey.png"
        label="Comunity management"
      />
      <IconCard
        img="/images/marketing_grey.png"
        label="Marketing tools"
      />
      <IconCard
        img="/images/content_grey.png"
        label="Content Guidlines"
      />
    </div>
  );
}

export default ToolsMenu;
