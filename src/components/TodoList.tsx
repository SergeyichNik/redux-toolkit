import React from 'react';
import {TodoType} from "../App";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import {RootStateType} from "../store";


const TodoList = () => {

    const todos = useSelector<RootStateType, TodoType[]>((state) => state.todos)

    const displayTodos = todos.map(todo => <TodoItem {...todo} key={todo.id}/>)

    return (
        <ul>
            {displayTodos}
        </ul>
    )


}
export default TodoList;