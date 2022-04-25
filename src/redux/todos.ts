import { ITodoItem } from "../components/Types";
import {
  SET_TODO_LIST,
  SET_TODO_ITEM,
  GET_TODO_LIST,
  DEL_TODO_ITEM,
  Actions,
  IState,
} from "./Types";

//action creators
export const getTodos = () => {
  return {
    type: GET_TODO_LIST,
  };
};
export const setTodos = (todoItemArray: ITodoItem[]) => {
  return {
    type: SET_TODO_LIST,
    payload: { todos: todoItemArray },
  };
};

export const setTodoItem = (todoItem: ITodoItem) => {
  return {
    type: SET_TODO_ITEM,
    payload: { todo: todoItem },
  };
};

export const delTodo = (itemId: number) => {
  return {
    type: DEL_TODO_ITEM,
    payload: { id: itemId },
  };
};

const intialState: IState = {
  todoList: [],
};
export const todoReducer = (state = intialState, action: Actions): IState => {
  switch (action.type) {
    case SET_TODO_ITEM:
      return {
        ...state,
        todoList: [...state.todoList, action.payload.todo],
      };
    case SET_TODO_LIST:
      return {
        ...state,
        todoList: [...action.payload.todos],
      };
    case DEL_TODO_ITEM:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((todo) => todo.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
