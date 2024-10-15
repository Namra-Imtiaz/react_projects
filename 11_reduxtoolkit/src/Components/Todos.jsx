import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removetodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div className="text-2xl font-bold text-center mb-4">Todos</div>
    <ul className="space-y-2">
        {todos.map((todo) => (
            <li 
                key={todo.id} 
                className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm"
            >
                <span className="text-lg">{todo.text}</span>
                <button 
                    className="text-red-500 hover:text-red-700 font-semibold"
                    onClick={() => dispatch(removetodo(todo.id))}
                >
                    X
                </button>
            </li>
        ))}
    </ul>
</>

  )
}

export default Todos