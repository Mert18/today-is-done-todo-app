import React from 'react'

const Todo = ({ description }) => {


    return (
        <div className="todo">
            <div className="todo__text">
                <h2>{description}</h2>
            </div>
        </div>
    )
}

export default Todo
