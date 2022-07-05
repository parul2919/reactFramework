import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DummyPage3 from "./DummyPage3";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <DummyPage3 />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
