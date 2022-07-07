import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectStructure from "./ProjectStructure";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <ProjectStructure />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
