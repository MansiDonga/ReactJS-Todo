import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!task || !description) {
            alert("Title or Description cannot be empty!");
        }
        else {
            props.addTodo(task, description);
            setTask("");
            setDescription("");
        }
    };

    return (
        <div className='container'>
            <h4>Add A Todo</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Todo Task</label>
                    <input
                        type="text"
                        value={task}
                        className="form-control"
                        onChange={(e) => { setTask(e.target.value) }}
                        id="task"
                        aria-describedby="taskHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Todo Description</label>
                    <input
                        type="text"
                        value={description}
                        className="form-control"
                        id="description"
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
