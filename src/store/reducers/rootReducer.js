import { combineReducers } from "redux";
import dummyReducer from "./dummyreducer";

const rootReducer = combineReducers({
  dummy: dummyReducer,
});
export default rootReducer;
