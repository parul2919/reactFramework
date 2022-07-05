import {
  DUMMY_TYPE,
  DUMMY_TYPE_SUCCESS,
  DUMMY_TYPE_FAILED,
} from "../actions/type";

const initialState = {
  message: "",
  loading: false,
};

export default function dummyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DUMMY_TYPE:
      return { ...state, loading: true };
    case DUMMY_TYPE_SUCCESS:
      console.log("check reducer success");
      return {
        ...state,
        message: action.response.message,
        loading: action.response.loading,
      };
    case DUMMY_TYPE_FAILED:
      console.log("check reducer failed");
      return { ...state, loading: false, message: "failed" };
    default:
      return state;
  }
}
