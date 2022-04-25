import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { ITodoItem } from "../Types";
import "./TodoCard.css";
const TodoCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  let x = id;
  let y: number = +x;
  const todoList = useSelector<RootState, ITodoItem[]>(
    (state: RootState) => state.todos.todoList
  );
  const item = todoList.find((todo) => todo.id === y);
  if (!item) {
    return null;
  }
  return (
    <div className="card">
      <div className="title">{item.title}</div>
      <div className="description">{item.description}</div>
      <div className="author">Author : {item.author}</div>
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
};

export default TodoCard;
