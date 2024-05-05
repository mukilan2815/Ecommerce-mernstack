import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [query, setquery] = useState();
  return (
    <UserContext.Provider value={{ userId, setUserId, query, setquery }}>
      {children}
    </UserContext.Provider>
  );
};
