import React, { createContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid để tạo id

// Tạo Context tổng
export const AppContext = createContext();

// Tạo Provider cho Context
export const AppProvider = ({ children }) => {
  // State chung cho toàn ứng dụng
  const [notifications, setNotifications] = useState([]);

  // Thêm noti
  const addNotification = ({ message, show = false }) => {
    const newNotification = {
      id: uuidv4(),
      message,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  // Xoá noti
  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((note) => note.id !== id));
  };
  
  // Hàm xử lý show noti
  const showNotification = useCallback((id) => {
    setNotifications((prevNoti) => 
      prevNoti.map((noti) => 
        noti.id === id ? { ...noti, completed: !noti.completed } : noti
      )
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        notifications,
        addNotification,
        showNotification,
        deleteNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
