import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import UtilityListings from "./UtilityListings";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <UtilityListings />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
