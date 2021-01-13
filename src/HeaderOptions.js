import { Avatar } from "@material-ui/core";
import React from "react";
import "./headerOptions.css";
const headerOptions = ({ Icon, title, avatar }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
};

export default headerOptions;
