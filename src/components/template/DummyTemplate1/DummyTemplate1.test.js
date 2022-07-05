import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react";
import DummyTemplate1 from "./DummyTemplate1";

describe("<Component /> spec", () => {
  it("should match snapshot", () => {
    const initialState = {
      dummy: {
        message: "success",
        loading: false,
      },
    };
    const mockStore = configureMockStore();
    const newStore = mockStore(initialState);

    const { view } = render(
      <Provider store={newStore}>
        <Router>
          <DummyTemplate1 />
        </Router>
      </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
