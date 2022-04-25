import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import { todoReducer } from "../redux/todos";
import rootSaga from "../redux/saga/rootSaga";
const rootReducer = combineReducers({
  todos: todoReducer,
});
// const store = createStore(cakeReducer);
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
