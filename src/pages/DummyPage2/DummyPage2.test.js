import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DummyPage2 from "./DummyPage2";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <DummyPage2 />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
