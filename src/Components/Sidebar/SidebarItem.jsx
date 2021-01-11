import React from "react";
import './Sidebar.css'


const SidebarItem = ({ title, Icon, selected }) => {
  return <div className={`sidebar_item ${selected && 'selected'}`}>
      <Icon className= "sidebar_item_icon"/>
      <h2 className="sidebar_item_title">{title}</h2>
  </div>;
};

export default SidebarItem;
