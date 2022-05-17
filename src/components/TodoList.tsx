
import React from 'react';
import {TodoType} from "../App";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
import {RootStateType} from "../store";


const TodoList = () => {

    const todos = useSelector<RootStateType, TodoType[]>((state) => state.todos)

    const displayTodos = todos.map(todo => <TodoItem {...todo}
                                                     toggleStatusTodo={() => {}}
                                                     key={todo.id}
                                                     removeTodo={() => {}}/>)

import React, {FC} from 'react';
import {TodoType} from "../App";
import TodoItem from "./TodoItem";

type PropsType = {
    todos: TodoType[],
    toggleStatusTodo: (id: string) => void,
    removeTodo: (id: string) => void
}

const TodoList: FC<PropsType> = ({todos, removeTodo, toggleStatusTodo}) => {

    const displayTodos = todos.map(todo => <TodoItem {...todo}
                                                     toggleStatusTodo={toggleStatusTodo}
                                                     key={todo.id}
                                                     removeTodo={removeTodo}/>
>>>>>>> origin/main
    )

    return (
        <ul>
            {displayTodos}
        </ul>
    );
};

export default TodoList;