import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DummyTemplate3 from "./DummyTemplate3";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <DummyTemplate3 />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
