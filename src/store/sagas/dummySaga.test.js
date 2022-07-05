import { runSaga } from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { DUMMY_TYPE, DUMMY_TYPE_SUCCESS } from "../actions/type";
import { getDummyApi, dummyApi } from "./dummySaga";

describe("Testing Dummy Saga", () => {
  it("should dispatch action 'DUMMY_TYPE'", () => {
    const generator = getDummyApi();
    expect(generator.next().value).toEqual(takeLatest(DUMMY_TYPE, dummyApi));
    expect(generator.next().done).toBeTruthy();
  });

  it("should bring data ", async () => {
    const testValue = { message: "success", loading: false };
    Promise.resolve({
      json: () => testValue,
    });

    const dispatchedActions = [];
    await runSaga(
      {
        dispatch: (action) => dispatchedActions.push(action),
      },
      dummyApi
    ).toPromise();

    expect(dispatchedActions).toEqual([
      {
        type: DUMMY_TYPE_SUCCESS,
        response: testValue,
      },
    ]);
  });
});
