import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";

type TodoType = {
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
            <label htmlFor="">
                <input value={text} onChange={(e ) => setText(e.currentTarget.value)}/>
                <button onClick={addTodo}>Add</button>
            </label>
            <ul>
                {
                    todos.map(todo => <li key={todo.id}>
                        <input checked={todo.completed} onChange={() => toggleStatusTodo(todo.id)} type="checkbox"/>
                        <span>{todo.text}</span>
                        <span onClick={() => removeTodo(todo.id)} className={"delete"}>&times;</span>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default App;
