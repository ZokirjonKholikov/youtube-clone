import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarItem selected title="Home" Icon={HomeIcon} />
      <SidebarItem title="Trending" Icon={WhatshotIcon} />
      <SidebarItem title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarItem title="Library" Icon={VideoLibraryIcon} />
      <SidebarItem title="History" Icon={HistoryIcon} />
      <SidebarItem title="Your Videos" Icon={OndemandVideoIcon} />
      <SidebarItem title="Watch Later" Icon={WatchLaterIcon} />
      <SidebarItem title="Liked Videos" Icon={ThumbUpAltOutlinedIcon} />
      <SidebarItem title="Show More" Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </div>
  );
}

export default Sidebar;
