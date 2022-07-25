import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./HeaderMobile.style";
import NavData from "../../../mockApi/NavData";
import List from "../List/List";
import Dummy from "../../../static/img/dummy.png";

const HeaderMobile = (props) => {
  const { className } = props;
  return (
    <nav className={`navbar  ${className}`}>
      <div className="mobile-nav">
        <input type="checkbox" name="" id="" className="check" />
        <div className="ham-menu">
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </div>
        <List list={NavData} classList="menu-items" />
      </div>

      <Link className="navbar-brand " to="/">
        <img src={Dummy} alt="logo-img" width="150" />
      </Link>
    </nav>
  );
};

export const MemoizedHeaderMob = memo(HeaderMobile);
export default styled(MemoizedHeaderMob)`
  ${styles}
`;
