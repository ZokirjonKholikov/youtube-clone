import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoAddIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import MicrofonIcon from "@material-ui/icons/Mic";
import { Avatar } from "@material-ui/core";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon className="header_menu_icon" />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
          alt="YouTube icon"
        />
      </div>
      <div className="header_input">
        <div className="header_input_search">
          <input type="text" placeholder="Search" />
          <SearchIcon  className="header_input_button" />
        </div>
        <MicrofonIcon className="header_microfon" />
      </div>
      <div className="header_icons">
        <VideoAddIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationIcon className="header_icon" />
        <Avatar src="https://yt3.ggpht.com/yti/ANoDKi5qU_rp8IuteEurjGAjprStjSlEGUtyYVlRRPQ=s88-c-k-c0x00ffffff-no-rj-mo"></Avatar>
      </div>
    </div>
  );
}

export default Header;
