import React from "react";
import styled from "styled-components";
import styles from "./ProjectStructure.style";
import MemoizedFooter from "../../organism/Footer/Footer";
import MemoizedHeader from "../../organism/Header/Header";
import FolderStructure from "../../organism/FolderStructure/FolderStructure";

const ProjectStructure = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <MemoizedHeader />
      <FolderStructure />
      <MemoizedFooter />
    </div>
  );
};

export default styled(ProjectStructure)`
  ${styles}
`;
export { ProjectStructure };
