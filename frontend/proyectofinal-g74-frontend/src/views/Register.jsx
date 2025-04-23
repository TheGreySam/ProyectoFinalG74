import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const { register } = useAuth();
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(nombre, email, password);
            toast.success("Registro exitoso. Bienvenido a Wilfred, " + email)
            navigate("/");
        } catch (error) {
            toast.error("Error al registrar:", error);
        }
        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.");
            return;
        }
    };


    return (
        <div class="bg-gray-100">



            <div class="container mx-auto px-4 py-16 max-w-md">
                <div class="bg-white rounded-lg shadow-md p-8">
                    <div class="text-center mb-8">
                        <h1 class="text-3xl font-bold text-gray-800">Crear cuenta</h1>
                        <p class="text-gray-600 mt-2">Únete a nuestra comunidad de compra y venta</p>
                    </div>

                    <form onSubmit={handleSubmit} >
                        <div class="space-y-6">

                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i class="fas fa-user text-gray-400"></i>
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Escribe tu nombre completo"
                                        class="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>


                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i class="fas fa-envelope text-gray-400"></i>
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="ejemplo@correo.com"
                                        class="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>


                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i class="fas fa-lock text-gray-400"></i>
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Mínimo 8 caracteres"
                                        class="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div class="mt-1 text-xs text-gray-500">La contraseña debe tener al menos 8 caracteres e incluir letras y números.</div>
                            </div>


                            <div>
                                <label for="confirm-password" class="block text-sm font-medium text-gray-700 mb-1">Confirmar contraseña</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i class="fas fa-lock text-gray-400"></i>
                                    </div>
                                    <input
                                        type="password"
                                        id="confirm-password"
                                        name="confirm-password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirma tu contraseña"
                                        class="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>


                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-medium text-gray-700">
                                        Acepto los <a href="#" class="text-blue-600 hover:underline">Términos y Condiciones</a> y la <a href="#" class="text-blue-600 hover:underline">Política de Privacidad</a>
                                    </label>
                                </div>
                            </div>


                            <div>
                                <button
                                    type="submit"
                                    class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition focus:outline-none focus:ring-4 focus:ring-blue-300"
                                >
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </form>


                    <div class="text-center mt-6">
                        <p class="text-gray-600">
                            ¿Ya tienes una cuenta?

                            <Link to="/Login" class="hover:text-blue-200 transition" >
                                Iniciar sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;