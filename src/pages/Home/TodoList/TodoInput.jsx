import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoInput = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue(''); // Reset input sau khi thêm
    }
  };

  return (
    <Form onSubmit={handleAddTodo}>
      <Form.Group controlId="formBasicTodo">
        <Form.Label>New Todo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Add Todo
      </Button>
    </Form>
  );
};

export default TodoInput;
