
import {ITodoItem} from '../components/Types';

export const GET_TODO_LIST = 'GET_TODO_LIST';
export const SET_TODO_LIST = 'SET_TODO_LIST';
export const SET_TODO_ITEM = 'SET_TODO_ITEM';
export const DEL_TODO_ITEM = 'DEL_TODO_ITEM';
export interface Actions{
    type:string,
    payload?:any
   
}


export interface IState{
    todoList:ITodoItem[]
}
