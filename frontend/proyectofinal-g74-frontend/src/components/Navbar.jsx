import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="bg-gray-100 text-white p-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <a href="index.html" class="text-2xl font-bold">Amazzon</a>
          <div class="hidden md:flex ml-10 space-x-6">
            <a href="index.html" class="hover:text-blue-200 transition"> Inicio</a>
            <a href="gallery.html" class="hover:text-blue-200 transition"> Explorar</a>
            <a href="#" class="hover:text-blue-200 transition"> Ofertas</a>
          </div>
        </div>
      </div>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "24px" }}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "24px" }}>
          About
        </Link>
      </div>
      
      </nav>
  );
}