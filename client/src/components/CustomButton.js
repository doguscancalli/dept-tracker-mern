import React from "react";
import { Link } from "react-router-dom";

const CustomButton = (props) => {
  const { children, to, block } = props;

  return (
    <Link to={to} className={`btn ${block ? "btn-block" : ""}`}>
      {children}
    </Link>
  );
};

export default CustomButton;
