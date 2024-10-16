import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import NotiItem from './NotiItem';
import { AppContext } from '../../../context/AppContext';

const NotiList = () => {
  const { notifications } = useContext(AppContext);
  
  return (
    <ListGroup className="mt-3">
      {notifications.map((noti) => (
        <NotiItem
          key={noti.id}
          noti={noti}
        />
      ))}
    </ListGroup>
  );
};

export default NotiList;
