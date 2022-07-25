import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./HeaderDesktop.style";
import NavData from "../../../mockApi/NavData";
import NavList from "../List/List";
import Dummy from "../../../static/img/dummy.png";

const HeaderMobile = (props) => {
  const { className } = props;
  return (
    <nav className={`navbar  ${className}`}>
      <Link className="navbar-brand " to="/">
        <img src={Dummy} alt="logo-img" width="150" />
      </Link>
      <NavList list={NavData} />
    </nav>
  );
};

export const MemoizedHeaderMob = memo(HeaderMobile);
export default styled(MemoizedHeaderMob)`
  ${styles}
`;
