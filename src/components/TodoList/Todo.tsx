import classes from "./Todo.module.css";
import ListItem from "../TodoItem/TodoItem";
import { ITodoItem } from "../Types";

const TodoList: React.FC<{
  todos: ITodoItem[];
  onDelete: (id: number) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((item) => {
        return (
          <ListItem
            key={item.id}
            name={item.title}
            id={item.id}
            onDelete={props.onDelete}
          />
        );
      })}
    </ul>
  );
};
export default TodoList;
