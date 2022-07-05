import { all } from "redux-saga/effects";
import { getDummyApi } from "./dummySaga";

export default function* rootSaga() {
  yield all([getDummyApi()]);
}
