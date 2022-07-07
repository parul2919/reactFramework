/* eslint-disable no-nested-ternary */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TechStackPage from "../components/pages/TechStackPage/TechStackPage";
import CompLibraryPage from "../components/pages/CompLibraryPage/CompLibraryPage";
import ProjectStructurePage from "../components/pages/ProjectStructurePage/ProjectStructurePage";
import UtilityListingsPage from "../components/pages/UtilityListingsPage/UtilityListingsPage";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TechStackPage />} />
        <Route exact path="/component-library" element={<CompLibraryPage />} />
        <Route
          exact
          path="/project-structure"
          element={<ProjectStructurePage />}
        />
        <Route exact path="/utilities" element={<UtilityListingsPage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
