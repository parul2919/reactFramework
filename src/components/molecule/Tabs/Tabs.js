import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Tabs.style";
import TabButton from "../../atom/TabButton";

const Tabs = (props) => {
  const { children } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <TabButton
              activeTab={activeTab}
              key={label}
              label={label}
              onClickTabItem={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default styled(Tabs)`
  ${styles}
`;
