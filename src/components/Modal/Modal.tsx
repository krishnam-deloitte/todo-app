import React, { useState } from "react";
import { ITodoItem } from "../Types";
import "./Modal.css";
const Modal: React.FC<{
  open: boolean;
  onAdd: (todo: ITodoItem) => void;
  closeModal: () => void;
}> = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  //Returning null means the component renders nothing
  if (!props.open) {
    return null;
  }

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    //console.log(title);
  };
  const authorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };
  const descriptionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoObject = {
      id: Math.random(),
      title: title,
      description: description,
      author: author,
    };

    props.onAdd(todoObject);

    props.closeModal();
  };
  return (
    <>
      <div className="overlay" />

      <div className="info">
        <form onSubmit={submitHandler}>
          <div className="cross" onClick={props.closeModal}>
            x
          </div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={titleChangeHandler}
          />
          <label htmlFor="description" id="description">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={descriptionChangeHandler}
          />
          <label htmlFor="author" id="author">
            Author
          </label>
          <input type="text" value={author} onChange={authorChangeHandler} />
          <button type="submit" className="but">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
