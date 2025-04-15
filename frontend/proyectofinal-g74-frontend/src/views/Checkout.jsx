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
                                <li key={item.cartItemId}
                                    class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md"
                                >
                                    <div class="mb-1 flex justify-between">
                                        <p class="text-gray-700">{item.name}</p>
                                        <p class="text-gray-700">${item.price}</p>
                                        
                                    </div>

                                    <button
                                    className="p-10 mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" 
                                    onClick={() => removeFromCart(item.cartItemId)}>
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <hr class="my-4" />
                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">${total}</p>
                                <p class="text-sm text-gray-700">IVA incluido</p>
                            </div>
                        </div>

                        <button onClick={handlePay} className="p-10 mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Finalizar Compra</button>
                    </>
                )}
            </div>
        </div>
    </div>;
}