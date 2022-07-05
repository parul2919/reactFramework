import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MemoizedHeader from "./Header";

describe("<Component /> spec", () => {
  it("should match snapshot", () => {
    const { view } = render(
      <Router>
        <MemoizedHeader />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
