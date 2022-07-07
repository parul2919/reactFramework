import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectStructurePage from "./ProjectStructurePage";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <ProjectStructurePage />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
