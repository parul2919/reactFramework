import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CompLibraryPage from "./CompLibraryPage";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <CompLibraryPage />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
