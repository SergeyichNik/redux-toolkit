import React, {FC} from 'react';
import {TodoType} from "../App";

type PropsType = {
    id: string,
    text: string,
    completed: boolean,
    toggleStatusTodo: (id: string) => void,
    removeTodo: (id: string) => void
}

const TodoItem: FC<PropsType> = (props) => {
    const {text, id, completed, removeTodo, toggleStatusTodo} = props

    return (
        <li>
            <input checked={completed} onChange={() => toggleStatusTodo(id)} type="checkbox"/>
            <span>{text}</span>
            <span onClick={() => removeTodo(id)} className={"delete"}>&times;</span>
        </li>
    );
};

export default TodoItem;