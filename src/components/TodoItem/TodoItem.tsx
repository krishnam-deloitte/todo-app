import { Link } from "react-router-dom";
import classes from "./TodoItem.module.css";
const ListItem: React.FC<{
  name: string;
  id: number;
  onDelete: (id: number) => void;
}> = (props) => {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.onDelete(props.id);
  };
  return (
    <Link to={`/todos/details/${props.id}`}>
      <li className={classes.item}>
        {props.name}
        {/* Method 1 <button className="button" onClick={props.onDelete.bind(null,props.id)}>Remove</button> */}

        <button className="button" onClick={clickHandler}>
          Remove
        </button>
        {/* Method 3 <button className="button" onClick={() => {props.onDelete(props.id)}}></button> */}
      </li>
    </Link>
  );
};

export default ListItem;
