import {takeLatest} from 'redux-saga/effects';
import {GET_TODO_LIST} from '../Types';
import {handleGetTodos} from './handlers/todos';
export default function* rootSaga(){

    yield takeLatest(GET_TODO_LIST, handleGetTodos); //yield is like await
}