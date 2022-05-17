import React, {useState} from 'react';
import './App.css';

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {useDispatch} from "react-redux";
import {addTodoAC} from "./store/todoSlice";


export type TodoType = {
    id: string,
    text: string,
    completed: boolean
}

function App() {

    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const addTodo = () => dispatch(addTodoAC({text}))

    // const removeTodo = (id: string) => {
    //
    // }

    // const toggleStatusTodo = (id: string) => {
    //
    // }

    return (
        <div className="App">
            <InputField text={text} setText={setText} addTodo={addTodo}/>
            <TodoList/>
        </div>
    );
}

export default App;
