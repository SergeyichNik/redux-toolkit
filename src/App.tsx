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

    return (
        <div className="App">
            <label htmlFor="">
                <input value={text} onChange={(e ) => setText(e.currentTarget.value)}/>
                <button onClick={addTodo}>Add</button>
            </label>
            <ul>
                {
                    todos.map(todo => <li key={todo.id}>
                        <input type="checkbox"/>
                        <span>{todo.text}</span>
                        <span style={{color: 'red'}}>&times;</span>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default App;
