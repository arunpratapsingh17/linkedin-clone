import React from "react";
import "./headerOptions.css";
const headerOptions = ({ Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      <h3 className="headerOptions_style">{title}</h3>
    </div>
  );
};

export default headerOptions;
