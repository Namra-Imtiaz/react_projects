import { createSlice,nanoid } from "@reduxjs/toolkit";

export const initialState={
    todos:[{id:1 , text:"hello world"}]
}

export const todoSlice=createSlice(
    {
        name:'todo',
        initialState,
        reducers:{
            // property+function is mai function ka refrence dai saktai hain ya phir function bana saktai hain
            addtodo:(state,action)=>{
                const todo={
                    id:nanoid() , 
                    text:action.payload
                }
                state.todos.push(todo)
            },
            removetodo:(state,action)=>{
                state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            },
            updatetodo:(state,action)=>{
                state.todos=state.todos.map((todo)=>
                todo.id==action.payload ? { ...todo, text: action.payload.text } 
                : todo)
            }
        }
    }
)

export const {addtodo,removetodo,updatetodo}=todoSlice.actions;

export default todoSlice.reducer;