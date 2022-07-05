import React from "react";
import DummyTemplate1 from "../../components/template/DummyTemplate1/DummyTemplate1";

const wrapperStyles = {
  maxWidth: "100%",
  margin: "auto",
};

const DummyPage1 = () => (
  <div style={wrapperStyles}>
    <DummyTemplate1 />
  </div>
);

export default DummyPage1;
