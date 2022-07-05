import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DummyTemplate2 from "./DummyTemplate2";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <DummyTemplate2 />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
