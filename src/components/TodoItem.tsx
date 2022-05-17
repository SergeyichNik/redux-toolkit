import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {removeTodoAC, toggleStatusTodoAC} from "../store/todoSlice";

type PropsType = {
    id: string,
    text: string,
    completed: boolean,
}

const TodoItem: FC<PropsType> = (props) => {
    const {text, id, completed} = props

    const dispatch = useDispatch()

    const removeTodo = () => dispatch(removeTodoAC({id}))
    const toggleStatusTodo = () => dispatch(toggleStatusTodoAC({id}))

    return (
        <li>
            <input checked={completed} onChange={toggleStatusTodo} type="checkbox"/>
            <span>{text}</span>
            <span onClick={removeTodo} className={"delete"}>&times;</span>
        </li>
    );
};

export default TodoItem;