import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FormEx from "./FormEx";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Router>
        <FormEx />
      </Router>
    );
    expect(view).toMatchSnapshot();
  });
});
