import { put, takeLatest } from "redux-saga/effects";
import {
  DUMMY_TYPE,
  DUMMY_TYPE_SUCCESS,
  DUMMY_TYPE_FAILED,
} from "../actions/type";

export function* dummyApi() {
  try {
    const res = { message: "success", loading: false };
    yield put({
      type: DUMMY_TYPE_SUCCESS,
      response: res,
    });
  } catch (e) {
    yield put({ type: DUMMY_TYPE_FAILED, message: e.message });
  }
}

export function* getDummyApi() {
  yield takeLatest(DUMMY_TYPE, dummyApi);
}
