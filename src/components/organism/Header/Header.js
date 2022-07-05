import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./Header.style";
import NavData from "./NavData";
import NavLink from "../../atom/navLink";
import Dummy from "../../../static/img/dummy.png";

const Header = (props) => {
  const { className } = props;

  return (
    <header className={`header ${className}`}>
      <nav className="navbar navbar-expand">
        <Link className="navbar-brand " to="/">
          <img src={Dummy} alt="logo-img" width="150" />
        </Link>
        <>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto ">
              {NavData.map((item) => (
                <NavLink
                  className="nav-link"
                  to={item.newTab ? { pathname: item.link } : item.link}
                  target={item.newTab ? "_blank" : "_self"}
                  key={item.page}
                >
                  {item.htmlText}
                </NavLink>
              ))}
            </ul>
          </div>
        </>
      </nav>
    </header>
  );
};

export const MemoizedHeader = memo(Header);
export default styled(MemoizedHeader)`
  ${styles}
`;
