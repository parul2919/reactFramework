import React from "react";
import { render } from "@testing-library/react";
import Modal from "./Modal";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(<Modal />);
    expect(view).toMatchSnapshot();
  });
});
