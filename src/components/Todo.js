import React from 'react';
import '../App.css'

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className="todo">
            <div style={{ backgroundColor: todo.isCompleted ? "green" : "" }}>
                {todo.text}
            </div>

            <div className="todo-buttons">
                <button className="donebutton" onClick={() => completeTodo(index)}>Done</button>
                <button className="removebutton" onClick={() => removeTodo(index)}>Delete</button>
            </div>
        </div>
    );
};

export default Todo