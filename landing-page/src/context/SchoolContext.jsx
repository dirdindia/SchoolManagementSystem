import React, { createContext, useContext, useState } from 'react';

const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isPanelPortalOpen, setIsPanelPortalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <SchoolContext.Provider
      value={{
        isAdmissionModalOpen,
        setIsAdmissionModalOpen,
        isPanelPortalOpen,
        setIsPanelPortalOpen,
        notification,
        showNotification
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
