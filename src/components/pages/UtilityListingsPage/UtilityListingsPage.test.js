import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import UtilityListingsPage from "./UtilityListingsPage";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <UtilityListingsPage />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
