import React from "react";
import styled from "styled-components";
import styles from "./FormEx.style";
import MemoizedFooter from "../../organism/Footer/Footer";
import MemoizedHeader from "../../organism/Header/Header";
import AboutForm from "../../organism/AboutForm/AboutForm";

const FormEx = (props) => {
  const { className } = props;

  return (
    <div className={`${className} dummy-template`}>
      <MemoizedHeader />
      <AboutForm />
      <MemoizedFooter />
    </div>
  );
};

export default styled(FormEx)`
  ${styles}
`;
