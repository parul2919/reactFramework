import React from "react";
import styled from "styled-components";
import styles from "./CompLibrary.style";
import MemoizedFooter from "../../organism/Footer/Footer";
import MemoizedHeader from "../../organism/Header/Header";
import ComponentGuide from "../../organism/ComponentGuide/ComponentGuide";

const DummyTemplate2 = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <MemoizedHeader />
      <ComponentGuide />
      <MemoizedFooter />
    </div>
  );
};

export default styled(DummyTemplate2)`
  ${styles}
`;
export { DummyTemplate2 };
