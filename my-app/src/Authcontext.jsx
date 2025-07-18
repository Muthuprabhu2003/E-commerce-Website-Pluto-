import { createContext, useState } from "react";
export const authContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
