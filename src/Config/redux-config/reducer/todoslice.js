import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "Todos",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state , action) => {
            // state ka matlb initial state
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        removeTodo: (state , action) =>{
            state.todo.splice(action.payload.index , 1)
        },
        EditTodo: (state, action) => {
            let newVal = prompt('Enter updated value');
            if (newVal!== '') {
                state.todo[action.payload.index].title = newVal; 
            }
        },
    }
})
    


export const { addTodo , removeTodo ,  EditTodo} = todoSlice.actions
export default todoSlice.reducer