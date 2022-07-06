import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/store";
import DummyPage1 from "./DummyPage1";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Provider store={store}>
        <Router>
          <DummyPage1 />
        </Router>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
