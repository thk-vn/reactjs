import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { AppContext } from '../../../context/AppContext';

const TodoItem = ({ noti }) => {
  const { deleteNotification } = useContext(AppContext);
  
  return (
    <ListGroup.Item
      className={`d-flex gap-3 justify-content-between align-items-center`}
    >
      <div>
        {noti.message}
      </div>
      <div className="d-flex gap-1">
        <Button
          variant={'success'}
          size="sm"
        >
          Show
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => deleteNotification(noti.id)}
        >
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
