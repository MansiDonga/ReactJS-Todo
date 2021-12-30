import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
        <div className='container'>
            <h2 className='text-center'>Todos works!!</h2>
            {props.todos.length === 0 ? "No Todos To Display!" :
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} onDelete={props.onDelete} />
                })}
        </div>
    )
}
