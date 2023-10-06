//Snippet: rxslice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            if(state.todoList.length < 12) {
            state.todoList.push(action.payload)
        }}, 
        
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter(item => item.id !== action.payload)
        },
        
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if(action.payload === item.id) {
                    if(item.done === true) {
                        item.done = false
                    } else {
                        item.done = true
                    }
                } 
            })
        },
    }
});

export const { saveTodo, setCheck, removeTodo, todoList } = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer;