import dummyReducer from "./dummyreducer";
import {
  DUMMY_TYPE,
  DUMMY_TYPE_FAILED,
  DUMMY_TYPE_SUCCESS,
} from "../actions/type";

describe("Hypothesis list reducer", () => {
  it("should return the initial state", () => {
    expect(dummyReducer(undefined)).toEqual({
      message: "",
      loading: false,
    });
  });

  it("should handle DUMMY_TYPE action ", () => {
    const action = {
      type: DUMMY_TYPE,
    };
    expect(dummyReducer({}, action)).toEqual({ loading: true });
  });

  it("should handle DUMMY_TYPE_SUCCESS action when  successful", () => {
    const action = {
      type: DUMMY_TYPE_SUCCESS,
      response: { message: "success", loading: false },
    };
    expect(dummyReducer({}, action)).toEqual({
      loading: false,
      message: "success",
    });
  });

  it("should handle DUMMY_TYPE_FAILED action when failed", () => {
    const action = {
      type: DUMMY_TYPE_FAILED,
    };
    expect(dummyReducer({}, action)).toEqual({
      loading: false,
      message: "failed",
    });
  });
});
