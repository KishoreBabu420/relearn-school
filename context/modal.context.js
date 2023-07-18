'use client';

import { useState, useContext, createContext } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalGlobalContext = () => {
  return useContext(ModalContext);
};

export { ModalContext, ModalProvider, useModalGlobalContext };
