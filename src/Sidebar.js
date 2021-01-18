import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://miro.medium.com/max/4000/1*QqfEHlLdVVZIaytTsupcbw.jpeg"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Arun Pratap Singh</h2>
        <h4>218apsj@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidbar_stat">
          <p>Who viewed your profile</p>
          <p className="  sidebar_statnumber">2669</p>
        </div>
        <div className="sidbar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statnumber">2669</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
