import React, { useContext } from 'react';
import TodoInput from '../../../components/TodoInput';
import { AppContext } from '../../../context/AppContext';
import NotiList from './NotiList';

const NotiMain = () => {
  const { addNotification } = useContext(AppContext);

  const handleAddNotification = (message) => {
    addNotification({
      message,
      show: true,
    })
  }
  
  return (
    <>
      <h3>Noti List (useContext, createContext)</h3>
      
      <TodoInput 
        onAddTodo={handleAddNotification}
        label="New Noti"
        placeholder="Enter a new noti"
        btnLabel="Add Noti"
      />
      
      <NotiList />
    </>
  );
};

export default NotiMain;
