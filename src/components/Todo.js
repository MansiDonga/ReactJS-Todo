import React from 'react'

export const Todo = ({ todo, onDelete }) => {
    return (
        <div className='card mt-2'>
            <div className="card-body">
                <h4 className='card-title'>{todo.task}</h4>
                <p className='card-text'>{todo.description}</p>
                <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
            </div>
        </div>
    )
}
