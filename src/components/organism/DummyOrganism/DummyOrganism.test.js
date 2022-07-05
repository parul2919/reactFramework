import React from "react";
import { render } from "@testing-library/react";
import DummyOrganism from "./DummyOrganism";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(<DummyOrganism />);
    expect(view).toMatchSnapshot();
  });
});
