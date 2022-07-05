import React from "react";
import styled from "styled-components";
import styles from "./DummyTemplate3.style";
import MemoizedFooter from "../../organism/Footer/Footer";
import MemoizedHeader from "../../organism/Header/Header";

const DummyTemplate3 = (props) => {
  const { className } = props;
  return (
    <>
      <MemoizedHeader />
      <div className={`${className} dummy-template`}>
        Here will have main content
      </div>
      <MemoizedFooter />
    </>
  );
};

export default styled(DummyTemplate3)`
  ${styles}
`;
export { DummyTemplate3 };
