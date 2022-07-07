import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CompLibrary from "./CompLibrary";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <CompLibrary />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
