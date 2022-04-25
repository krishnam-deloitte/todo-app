import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NewTodo from "./components/NewTodo/NewTodo";
import { RootState } from "./redux/store";
import { getTodos, setTodoItem, delTodo } from "./redux/todos";
import TodoList from "./components/TodoList/Todo";
import { ITodoItem } from "./components/Types";
import Modal from "./components/Modal/Modal";
import TodoCard from "./components/TodoCard/TodoCard";
import { Dispatch } from "redux";
import { Actions } from "./redux/Types";

function App() {
  const dispatch = useDispatch<Dispatch<Actions>>();
  const todoList = useSelector<RootState, ITodoItem[]>(
    (state: RootState) => state.todos.todoList
  );
  console.log("Component Renders");
  console.log(todoList);

  const addTodo = (todoItem: ITodoItem) => {
    dispatch(setTodoItem(todoItem));
  };
  const deleteTodo = (id: number) => {
    dispatch(delTodo(id));
  };
  useEffect(() => {
    dispatch(getTodos());
    console.log("Effect Ran!");
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <button className="btn" onClick={() => setIsOpen(true)}>
              Add New Item
            </button>
            <Modal
              open={isOpen}
              onAdd={addTodo}
              closeModal={() => setIsOpen(false)}
            />
            {/* <NewTodo onAddTodo={addTodo} /> */}
            <h2 style={{ margin: "2rem" }}>Todos</h2>
            <TodoList todos={todoList} onDelete={deleteTodo} />
          </Route>
          <Route path="/todos/details/:id">
            <TodoCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
