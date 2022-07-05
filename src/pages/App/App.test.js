import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(<App />);
    expect(view.firstChild).toMatchSnapshot();
  });
});
