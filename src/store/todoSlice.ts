import {createSlice} from "@reduxjs/toolkit";
import {TodoType} from "../App";
import {addTodo, removeTodo, toggleStatusTodo} from "./actions";

export type State = TodoType[]

const initialState: State = []




const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo,
        removeTodo,
        toggleStatusTodo,
    },
})

export const addTodoAC = todoSlice.actions.addTodo
export const removeTodoAC = todoSlice.actions.removeTodo
export const toggleStatusTodoAC = todoSlice.actions.toggleStatusTodo
export default todoSlice.reducer