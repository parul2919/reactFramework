import React from "react";

const TabButton = (props) => {
  const { label, onClickTabItem, activeTab } = props;
  const tabClick = () => {
    onClickTabItem(label);
  };

  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }

  return (
    <button className={className} type="button" onClick={tabClick}>
      {label}
    </button>
  );
};

export default TabButton;
