import React from "react";
import TodoItem from "./todoitem";

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    toggleTodo={() => toggleTodo(index)}
                    deleteTodo={() => deleteTodo(index)}
                    editTodo={(newText) => editTodo(index, newText)}
                />
            ))}
        </ul>
    );
}

export default TodoList;
