import { createSlice } from "@reduxjs/toolkit";

let initTodos;
if (localStorage.getItem("todos") === null) {
    initTodos = [];
}
else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
}

const initialState = {
    todos: initTodos,
    task: "",
    description: ""
}

export const todoSlice = createSlice({
    name: "addTodo",
    initialState,
    reducers: {
        setTodos: (state,action) => {
            state.todos = action.payload
        },
        setTaskValue: (state, action) => {
            state.task = action.payload
        },
        setDescriptionValue: (state, action) => {
            state.description = action.payload
        }
    }
});

export const { setTodos, setTaskValue, setDescriptionValue } = todoSlice.actions;

export default todoSlice.reducer