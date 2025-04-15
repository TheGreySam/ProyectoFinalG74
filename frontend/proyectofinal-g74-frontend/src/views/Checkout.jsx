import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handlePay = () => {
        // Simulacion de pago
        setTimeout(() => {
            clearCart();
            navigate("/Gracias");
        }, 1000);
    };

    return <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16 max-w-md">
            <div class="bg-white rounded-lg shadow-md p-8">
                <div class="text-center mb-8">
                    <h1 class="text-center mb-8">Checkout</h1>
                </div>

                {cart.length === 0 ? (
                        <p>Tu Carrito esta vacio.</p>
                    ) : (
                        <>
                        <ul>
                        {cart.map((item) => (
                            <li key={item.cartItemId}>
                                {item.name} - ${item.price}
                                <button onClick={() => removeFromCart(item.cartItemId)}>Eliminar</button> 
                            </li>
                        ))}
                        </ul>
                        <p>Total: ${total}</p>
                        <button onClick={handlePay}>Finalizar Compra</button>
                        </>
                    )}
            </div>
        </div>
    </div>;
}