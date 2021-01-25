import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItems">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

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
          <p className="sidebar_statnumber">2669</p>
        </div>
        <div className="sidbar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statnumber">2669</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("Software Engineering")}
        {recentItem("Textual Engineering")}
        {recentItem("App Development")}
        {recentItem("Gamer")}
      </div>
    </div>
  );
};

export default Sidebar;
