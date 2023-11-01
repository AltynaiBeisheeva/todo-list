import React, { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [isEditing, setEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(todo.text);

    const handleUpdateText = () => {
        editTodo(updatedText);
        setEditing(false);
    };

    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={updatedText}
                        onChange={(e) => setUpdatedText(e.target.value)}
                    />
                    <button onClick={handleUpdateText}>Update</button>
                </div>
            ) :
                <div>
                    <span onClick={toggleTodo}>{todo.text}</span>
                    <button onClick={() => setEditing(true)}>Edit</button>
                    <button onClick={deleteTodo}>Delete</button>
                </div>
            }
        </li>
    );
}

export default TodoItem;
