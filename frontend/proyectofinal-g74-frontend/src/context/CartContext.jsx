import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  
    const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const cartItem = {
        ...product,
        cartItemId: Date.now() + Math.random()
    };
    setCart((prev) => [...prev, cartItem]);
    // Check if the product is already in the cart
    toast.success(`${product.producto} agregado al carrito!`, {
      position: "top-right",
      autoClose: 2000,
    });
  }
    
  const removeFromCart = (cartItemid) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemid));
  }
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
