import React from "react";
import { render } from "@testing-library/react";
import TechStack from "./TechListing";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(<TechStack />);
    expect(view).toMatchSnapshot();
  });
});
