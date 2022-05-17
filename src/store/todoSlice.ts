import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoType} from "../App";
import {v1} from "uuid";

type State = TodoType[]

const initialState: State = []


const addTodo: CaseReducer<State, PayloadAction<{text: string}>> = (state, action) => {
    state.push({
        id: v1(),
        completed: false,
        ...action.payload
    })
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo,
        removeTodo(state, action) {},
        toggleStatusTodo(state, action) {},
    },
})

export const addTodoAC = todoSlice.actions.addTodo
export default todoSlice.reducer