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
    )

    return (
        <ul>
            {displayTodos}
        </ul>
    );
};

export default TodoList;