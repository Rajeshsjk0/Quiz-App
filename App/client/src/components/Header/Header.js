import React from "react";
import "./header.css";

const Header = (props) => {
  return <div className="header">{props.text}</div>;
};

export default Header;
