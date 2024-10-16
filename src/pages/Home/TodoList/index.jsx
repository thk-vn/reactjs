import React, { useState, useCallback } from 'react';
import TodoInput from '../../../components/TodoInput';
import { v4 as uuidv4 } from 'uuid'; // Import uuid để tạo id
import TodoList from './TodoList';

const MainTodo = () => {
  const [todos, setTodos] = useState([]);

  // Hàm xử lý khi thêm todo mới
  const handleAddTodo = (text) => {
    const newTodo = {
      id: uuidv4(), // Tạo id duy nhất cho mỗi todo
      text,
      completed: false,  // Trạng thái hoàn thành
    };
    setTodos([newTodo, ...todos]); // Thêm todo mới vào danh sách
  };

  // Hàm xử lý khi xóa todo
  const handleDeleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  // Hàm xử lý khi đánh dấu hoàn thành
  const handleToggleComplete = useCallback((id) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <>
      <h3>Todo List (useState)</h3>
      <TodoInput 
        onAddTodo={handleAddTodo}
        label="New Todo"
        placeholder="Enter a new todo"
        btnLabel="Add Todo"
      />
      <TodoList 
        todos={todos} 
        onDeleteTodo={handleDeleteTodo} 
        onToggleComplete={handleToggleComplete} 
      />
    </>
  );
};

export default MainTodo;
