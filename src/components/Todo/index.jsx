import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, selectTodoCount, selectTodoValue } from "../../slices/todoSlice";
import TodoItem from "./TodoItem";
import './Todo.css';

export default function Todo() {
    const [inputValue, setInputValue] = useState('');
    const count = useSelector(selectTodoCount);
    const todos = useSelector(selectTodoValue);
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputValue));
    }

    const handleTodoDone = (id) => {
        dispatch(removeTodo(id));
    }

    return(
        <div className="Todo">
            <h1>TO DO LIST</h1>
            <form className="todo-form" onSubmit={handleAddTodo}>
                <input type="text" onInput={(e)=>{setInputValue(e.target.value)}}></input>
                <button type="submit">Add</button>
            </form>
            {
                count > 0 &&
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        id={todo.id}
                        onCheck={handleTodoDone}
                    />
                ))
            }
            {
                count === 0 && <p>No todos</p>
            }
        </div>
    )
}