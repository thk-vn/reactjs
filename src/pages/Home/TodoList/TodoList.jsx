import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo, onToggleComplete }) => {
  return (
    <ListGroup className="mt-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
