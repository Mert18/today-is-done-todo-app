import React, { useState } from 'react'
import '../App.css'

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                className="value"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
};

export default TodoForm