// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
   
    return stored && stored != "undefined" ? JSON.parse(stored) : null;
  });

  const login = (email, password) => {
    // Simula login
    const fakeUser = { id: 1, name: "Usuario", email };
    console.log("Login exitoso", fakeUser);
    setUser(fakeUser);
    console.log("Usuario guardado en localStorage", json.stringify(fakeUser));
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  const register = (name, email, password) => {
    // Simula registro
    const newUser = { id: 2, name, email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
