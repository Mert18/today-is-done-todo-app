import React, { useEffect, useState } from 'react';

import Todo from './Todo';




const Main = () => {
    const [todos, setTodos] = useState([]);

    async function getTodos() {
        const res = await fetch("http://localhost:5000/todos");

        const todos = await res.json();
        setTodos(todos);
    }

    async function deleteTodo(id) {
        try {
            const res = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));

        } catch (error) {
            console.error(error.message)
        }

    }

    useEffect(() => {
        getTodos();
    }, [])


    return (
        <section className="main">
            <div className="main__todos">
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.todo_id} className="todox">
                            <div className="todox__comp">
                                <Todo description={todo.description} todos={todos} />
                            </div>
                            <div className="todox__btn">
                                <div onClick={() => deleteTodo(todo.todo_id)}>
                                    <img src="/images/checked.svg" width="30px" alt="success btn" />
                                </div>
                                <div onClick={() => deleteTodo(todo.todo_id)}>
                                    <img src="/images/remove.svg" width="30px" alt="remove btn" />
                                </div>
                                <div>
                                    <img src="/images/pin.svg" width="30px" alt="pin btn" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="main__others">

            </div>
        </section>
    )
}

export default Main
