import React from "react";
import { Link } from "react-router-dom";

export default function Thanks() {
    return <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16 max-w-md">
            <div class="bg-white rounded-lg shadow-md p-8">
               

                <div class="text-center mt-6">
                    <h1 class="text-center mb-8">Gracias por comprar con nosotros</h1>
                    <p class="text-gray-600">
                        Te hemos enviado un correo con los detalles (funcionalidad por implementar)
                        <Link to="/Register" class="hover:text-blue-200 transition" >
                            Volver al inicio
                        </Link>

                    </p>
                </div>
            </div>
        </div>
    </div>;
}