import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./Header.style";
import HeaderMobile from "../../molecule/HeaderMobile/HeaderMobile";
import HeaderDesktop from "../../molecule/HeaderDesktop/HeaderDesktop";

const Header = (props) => {
  const { className } = props;

  const [isMobile, setIsMobile] = useState(false);

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  console.log(isMobile, "isMobile");
  return (
    <header className={`header ${className}`}>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};

export const MemoizedHeader = memo(Header);
export default styled(MemoizedHeader)`
  ${styles}
`;
