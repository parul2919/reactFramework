import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import Router from "./Routers";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Provider store={store}>
        <Router />
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
