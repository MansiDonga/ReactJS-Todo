import React from 'react'
import { Counter } from '../features/counter/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { setTaskValue, setDescriptionValue } from '../features/todo/todoSlice';

export const AddTodo = (props) => {
    // const [task, setTask] = useState("");
    // const [description, setDescription] = useState("");
    const task = useSelector((state)=> state.addTodo.task);
    const description = useSelector((state)=> state.addTodo.description);
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        if (!task || !description) {
            alert("Title or Description cannot be empty!");
        }
        else {
            props.addTodo(task, description);
            dispatch(setTaskValue(task));
            dispatch(setDescriptionValue(description));
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
                        onChange={(e) => dispatch(setTaskValue(e.target.value))}
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
                        onChange={(e) => dispatch(setDescriptionValue(e.target.value))}
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
            </form>
            <div className='mt-3'>
                <Counter></Counter>
            </div>
        </div>
    )
}
