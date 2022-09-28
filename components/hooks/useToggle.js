import { useState } from "react";

export const useToggle = (initialState) => {
  const [status, setStatus] = useState(initialState);
  const toggleStatus = () => setStatus((prevState) => !prevState);

  return { status, toggleStatus };
};
