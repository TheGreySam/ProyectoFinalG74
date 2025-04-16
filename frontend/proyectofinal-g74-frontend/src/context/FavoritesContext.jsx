import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      toast.dismiss(); // Limpia cualquier toast activo antes de mostrar uno nuevo
      if (exists) {
        toast.info(`🗑️ "${product.name}" eliminado de favoritos`);
        return prev.filter((item) => item.id !== product.id);
      } else {
        toast.success(`❤️ "${product.name}" añadido a favoritos`);
        return [...prev, product];
      }
    });
  };
  

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
