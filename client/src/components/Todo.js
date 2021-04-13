import React from 'react'

const Todo = () => {
    return (
        <div className="todo">
            <div className="todo__text">
                <h2>Say hello world 100 times</h2>
            </div>
            <div className="todo__others">
                <div className="todo__others__dyn">
                    <h3>Remaining Time: 2 Hours</h3>
                    <h3>Priority: High</h3>
                </div>

                <div className="todo__others__buttons">
                    <button className="success">&#10003; Done</button>
                    <button className="fail">&#10540; Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default Todo
