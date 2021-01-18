import React, { useState } from 'react';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import './App.css';
import logo from './assets/logogibi2.svg'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Go to Jogging',
      isCompleted: false
    },
    {
      text: 'Brush your teeth',
      isCompleted: false
    },
    {
      text: 'Read some books',
      isCompleted: false

    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  };

  return (
    <div className="App">
      <header>
        <div className="header-text">
          <div className="header-logo">
            <img src={logo} width="150px"></img>
          </div>
          <div className="header-title">
            <h1>today</h1>
            <h1>is</h1>
            <h1>done</h1>
          </div>

        </div>

        <div className="form-wrapper">
          <h3>what is going to be handled today?</h3>
          <br></br>
          <TodoForm addTodo={addTodo} />
        </div>
      </header>



      <main>
        <div className="todo-wrapper">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </main>


    </div>
  )
}

export default App