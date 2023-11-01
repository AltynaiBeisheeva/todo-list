import React, { useState } from "react";
import "./App.css";
import TodoList from "./todolist";

function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [filter, setFilter] = useState("all");

    const addTodo = () => {
        if (task.trim() !== "") {
            setTodos([...todos, { text: task, completed: false }]);
            setTask("");
        }
    };

    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const editTodo = (index, newText) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = newText;
        setTodos(updatedTodos);
    };

    const filterTodos = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") {
            return todo.completed;
        } else if (filter === "active") {
            return !todo.completed;
        } else {
            return true;
        }
    });

    return (
        <div className="app">
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        addTodo();
                    }
                }}
            />
            <button onClick={addTodo}>Add</button>
            <div className="filters">
                <button onClick={() => filterTodos("all")}>All</button>
                <button onClick={() => filterTodos("active")}>Active</button>
                <button onClick={() => filterTodos("completed")}>Completed</button>
            </div>
            <TodoList
                todos={filteredTodos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        </div>
    );
}

export default App;
