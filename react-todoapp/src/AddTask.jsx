import React, { useState, useRef } from 'react';

function AddTask({ onAdd }) {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onAdd({ id: Date.now(), name: input });
            setInput("");
            inputRef.current.focus();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                ref={inputRef}
                placeholder="Add a new task" 
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;