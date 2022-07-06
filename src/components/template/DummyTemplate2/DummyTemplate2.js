import React from "react";
import styled from "styled-components";
import styles from "./DummyTemplate2.style";
import MemoizedFooter from "../../organism/Footer/Footer";
import MemoizedHeader from "../../organism/Header/Header";

const DummyTemplate2 = (props) => {
  const { className } = props;
  return (
    <>
      <MemoizedHeader />
      <div className={`${className} dummy-template wrapper-std`}>
        Here will have main content. Here will have main content.Here will have
        main content.Here will have main content.Here will have main
        content.Here will have main contentHere will have main contentHere will
        have main contentHere will have main content
      </div>
      <MemoizedFooter />
    </>
  );
};

export default styled(DummyTemplate2)`
  ${styles}
`;
export { DummyTemplate2 };
