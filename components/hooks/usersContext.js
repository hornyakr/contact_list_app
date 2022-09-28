import { createContext, useContext, useState } from "react";

const Context = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <Context.Provider value={[users, setUsers]}>{children}</Context.Provider>
  );
}

export function useUsersContext() {
  return useContext(Context);
}
