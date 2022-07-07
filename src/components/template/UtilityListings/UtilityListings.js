import React from "react";
import styled from "styled-components";
import styles from "./UtilityListings.style";
import MemoizedFooter from "../../organism/Footer/Footer";
import MemoizedHeader from "../../organism/Header/Header";
import Utilities from "../../organism/Utilities/Utilities";

const UtilityListings = (props) => {
  const { className } = props;

  return (
    <div className={`${className} dummy-template`}>
      <MemoizedHeader />
      <Utilities />
      <MemoizedFooter />
    </div>
  );
};

export default styled(UtilityListings)`
  ${styles}
`;
