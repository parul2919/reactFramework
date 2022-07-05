import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = (props) => {
  const { className, children, to } = props;

  const location = useLocation();
  return (
    <Link
      className={className}
      {...props}
      style={
        location.pathname === to
          ? { textDecoration: "underline" }
          : { textDecoration: "none" }
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
