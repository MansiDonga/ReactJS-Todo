import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import React, { useEffect } from 'react';
// import { useState } from 'react';
import { AddTodo } from './components/AddTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { About } from './components/About';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from './features/todo/todoSlice';

function App() {
  // let initTodos;
  // if (localStorage.getItem("todos") === null) {
  //   initTodos = [];
  // }
  // else {
  //   initTodos = JSON.parse(localStorage.getItem("todos"));
  // }

  const todos = useSelector((state) => state.addTodo.todos);
  const dispatch = useDispatch();

  const onDelete = (todo) => {
    console.log("Deleted Todo!: ", todo);
    dispatch(setTodos(todos.filter((item) => {
      return item !== todo;
    })));
    // setTodos(todos.filter((item) => {
    //   return item !== todo;
    // }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (task, description) => {
    console.log("Added: ", task, description);
    let id;
    if (todos.length === 0) {
      id = 1;
    }
    else {
      id = todos[todos.length - 1].id + 1;
    }
    const newTodo = {
      id: id,
      task: task,
      description: description
    }
    dispatch(setTodos([...todos, newTodo]));
    // setTodos([...todos, newTodo]);
    console.log("Added: ", newTodo);
  }

  // const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route exact path="/" element={

            <div className='container'>
              <div className="row">
                <div className="col-lg-6"><AddTodo addTodo={addTodo} /></div>
                <div className="col-lg-6"><Todos todos={todos} onDelete={onDelete} /></div>
              </div>
            </div>

          }>
          </Route>
          <Route exact path="/about" element={<About />}>

          </Route>

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
