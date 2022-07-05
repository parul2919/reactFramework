import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "./Footer.style";
import Dummy from "../../../static/img/dummy.png";

const Footer = (props) => {
  const { className } = props;
  return (
    <section className={`footer ${className}`}>
      <nav style={{ maxWidth: "1440px", margin: "auto" }}>
        <Link className="footer-logo" to="/">
          <img src={Dummy} alt="logo-img" width="150" />
        </Link>
      </nav>
      <div className="disclaimer-text text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ips um has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </div>
    </section>
  );
};
export const MemoizedFooter = React.memo(Footer);
export default styled(MemoizedFooter)`
  ${styles}
`;
