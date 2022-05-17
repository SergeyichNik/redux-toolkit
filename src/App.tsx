import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

export type TodoType = {
    id: string,
    text: string,
    completed: boolean
}

function App() {

    const [todos, setTodos] = useState<TodoType[]>([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: v1(),
                    text,
                    completed: false
                }
            ])
            setText('')
        }

    }

    const removeTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleStatusTodo = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    return (
        <div className="App">
            <InputField text={text} setText={setText} addTodo={addTodo}/>
            <TodoList todos={todos} toggleStatusTodo={toggleStatusTodo} removeTodo={removeTodo}/>
        </div>
    );
}

export default App;
