import { call, put } from "redux-saga/effects";
import { setTodos } from "../../todos";
import requestGetTodos from "../requests/todos";
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export function* handleGetTodos(action: any) {
  try {
    const response: ResponseGenerator = yield call(requestGetTodos);
    console.log(response);
    const { data } = response;
    // console.log('The data is:');
    // console.log(data);

    yield put(setTodos(data)); //put is similar to dispatch function
  } catch (error) {
    console.log(error);
  }
}
