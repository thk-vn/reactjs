import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const TodoItem = ({ todo, onDeleteTodo, onToggleComplete }) => {
  return (
    <ListGroup.Item
      className={`d-flex gap-3 justify-content-between align-items-center ${todo.completed ? 'completed-todo' : ''}`}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <div>
        {todo.text}
      </div>
      <div className="d-flex gap-1">
        <Button
          variant={todo.completed ? 'secondary' : 'success'}
          size="sm"
          onClick={() => onToggleComplete(todo.id)}
        >
          {todo.completed ? 'Uncomplete' : 'Complete'}
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
