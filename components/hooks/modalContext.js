import { useState } from "react";
import { createContext, useContext } from "react";

const Context = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    isOpen: false,
    isAdding: false,
    user: {
      id: null,
      name: null,
      phone: null,
      email: null,
      img: null,
    },
  });

  return (
    <Context.Provider value={[modal, setModal]}>{children}</Context.Provider>
  );
}

export function useModalContext() {
  return useContext(Context);
}
