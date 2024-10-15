import { createContext,useContext } from "react";

export const todocontext=createContext({
    todo:[
        {
            id:1,
            todo:'todo msg',
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider=todocontext.Provider;

export const useTodo=()=>{
    return useContext(todocontext)
}