import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-4 mt-12">
            <div class="container mx-auto px-4 text-center text-sm">
            <p>&copy; 2025 Wilfred. Todos los derechos reservados.</p>
            <div class="mt-2 space-x-4">
                <a href="#" class="text-gray-300 hover:text-white">Términos y condiciones</a>
                <a href="#" class="text-gray-300 hover:text-white">Política de privacidad</a>
                <a href="#" class="text-gray-300 hover:text-white">Centro de ayuda</a>
            </div>
        </div>
        </footer>
    );
}
