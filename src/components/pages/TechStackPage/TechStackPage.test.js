import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/store";
import TechStackPage from "./TechStackPage";

describe("<Component /> spec", () => {
  it("renders the component", () => {
    const view = render(
      <Provider store={store}>
        <Router>
          <TechStackPage />
        </Router>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
