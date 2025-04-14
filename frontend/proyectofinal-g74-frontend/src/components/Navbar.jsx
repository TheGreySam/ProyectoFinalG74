import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="bg-gray-100 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <Link to="/" class="text-2xl font-bold" >
            ZoeChalupas
          </Link>

          <div class="hidden md:flex ml-10 space-x-6">
            <Link to="/" class="hover:text-blue-200 transition" >
              Inicio
            </Link>
            <Link to="/Gallery" class="hover:text-blue-200 transition" >
              Galeria
            </Link>
            <Link to="/Login" class="hover:text-blue-200 transition" >
              Iniciar Sesion
            </Link>
            {/* <a href="index.html" class="hover:text-blue-200 transition"> Inicio</a>
            <a href="gallery.html" class="hover:text-blue-200 transition"> Explorar</a>
            <a href="#" class="hover:text-blue-200 transition"> Ofertas</a> */}
          </div>
        </div>
      </div>
      

    </nav>
  );
}