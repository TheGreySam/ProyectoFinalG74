// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");

    return stored && stored != "undefined" ? JSON.parse(stored) : null;
  });

  //const login = (email, password) => {
  // Simula login
  //const fakeUser = { id: 1, name: "Usuario", email };
  //console.log("Login exitoso", fakeUser);
  //setUser(fakeUser);
  //console.log("Usuario guardado en localStorage", JSON.stringify(fakeUser));
  //localStorage.setItem("user", JSON.stringify(fakeUser));
  //};

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:3005/login", {
        email,
        password,
      });

      const token = res.data;
      const decoded = jwtDecode(token);

      //console.log(res.data);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(decoded));
      setUser(decoded);

      //const navigate = useNavigate();
      //const userData = JSON.parse(user);
      //setUser(userData);
      //console.log(decoded)
      toast.success("Bienvenido a Wilfred, " + decoded.email.nombre)
      const success = decoded
      //if (success) navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    }
  };


    const register = async (name, email, password) => {
      // Simula registro
      //const newUser = { id: 2, name, email };
      //setUser(newUser);
      //localStorage.setItem("user", JSON.stringify(newUser));

      const res = await axios.post("http://localhost:3005/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password })
    });

    if (!res.ok) {
      const error = await res.json();
      toast.error("Error al registrar el usuario: " + error.message);
      return;
    }
    const data = await res.json();
    const decoded = jwtDecode(data.token);
    setUser(decoded);
    localStorage.setItem("token", data.token);

  };

    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      toast.success("Has cerrado sesión correctamente.");
    };

    const isAuthenticated = !!user;

    return (
      <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
        {children}
      </AuthContext.Provider>
    );
  };
