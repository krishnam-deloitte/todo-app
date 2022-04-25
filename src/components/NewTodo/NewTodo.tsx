import { useRef } from 'react';
import classes from './NewTodo.module.css'
import { ITodoItem } from '../Types';
const NewTodo:React.FC <{onAddTodo:(todo:ITodoItem) => void}> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event:React.FormEvent) => {

        event.preventDefault();
        if(inputRef.current!.value.trim().length === 0){
            return
        }
        const todoObject = {id:Math.random(),title:inputRef.current!.value,description:'',author:''}
        props.onAddTodo(todoObject)

    }
    return(
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="textfield">To Do</label>
            <input type='text' id='textfield' ref={inputRef} />
            <button>Add</button>
        </form>
    )
}
export default NewTodo;