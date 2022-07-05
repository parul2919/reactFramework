/* eslint-disable no-nested-ternary */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DummyPage1 from "../DummyPage1/DummyPage1";
import DummyPage2 from "../DummyPage2/DummyPage2";
import DummyPage3 from "../DummyPage3/DummyPage3";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DummyPage1 />} />
        <Route exact path="/demoLink2" element={<DummyPage2 />} />
        <Route exact path="/demoLink3" element={<DummyPage3 />} />
      </Routes>
    </Router>
  );
}

export default Routers;
