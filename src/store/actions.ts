import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";
import {State} from "./todoSlice";


export const addTodo: CaseReducer<State, PayloadAction<{text: string}>> = (state, action) => {
    state.push({
        id: v1(),
        completed: false,
        ...action.payload
    })
}

export const removeTodo: CaseReducer<State, PayloadAction<{id: string}>> = (state, action) => {
   return state.filter( todo => todo.id !== action.payload.id)
}

export const toggleStatusTodo: CaseReducer<State, PayloadAction<{id: string}>> = (state, action) => {
    const toggledTodo = state.find(todo => todo.id === action.payload.id)
    if (toggledTodo) toggledTodo.completed = !toggledTodo.completed
}


