import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { className, children } = props;
  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
