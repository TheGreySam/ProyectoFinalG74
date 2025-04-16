import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import Products from "../data/Products.js";

// const mockProducts = [
//   { id: 1, name: "Producto 1", price: 100, image: "https://picsum.photos/200/100" },
//   { id: 2, name: "Producto 2", price: 200, image: "https://picsum.photos/200/200" },
//   { id: 3, name: "Producto 3", price: 300, image: "https://picsum.photos/200/300" },
// ];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div class="bg-gray-100">
      <div class="container mx-auto my-6 px-4">
        <div class="flex items-center w-full max-w-3xl mx-auto">
          <input type="text" placeholder="¿Qué estás buscando?" class="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button class="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* <!-- Estructura principal: Menú lateral y contenido --> */}
      <div class="container mx-auto px-4 flex flex-col md:flex-row gap-6">
        {/* <!- Menú lateral de categorías --> */}
        <div class="md:w-1/4 bg-white rounded-lg shadow-md p-4 h-fit">
          <h2 class="text-lg font-semibold mb-4 border-b pb-2">Categorías</h2>
          <ul class="space-y-2">
            <li><a href="#" class="block py-2 px-3 hover:bg-blue-50 rounded-md transition">Electrónicos</a></li>
            <li><a href="#" class="block py-2 px-3 hover:bg-blue-50 rounded-md transition">Computadoras</a></li>
            <li><a href="#" class="block py-2 px-3 hover:bg-blue-50 rounded-md transition">Celulares</a></li>
            <li><a href="#" class="block py-2 px-3 hover:bg-blue-50 rounded-md transition">Accesorios</a></li>
            <li><a href="#" class="block py-2 px-3 hover:bg-blue-50 rounded-md transition">Audio y Video</a></li>
            <li><a href="#" class="block py-2 px-3 hover:bg-blue-50 rounded-md transition">Fotografía</a></li>
            <li><a href="#" class="block py-2 px-3 hover:bg-blue-50 rounded-md transition">Videojuegos</a></li>
            <li><a href="#" class="block py-2 px-3 hover:bg-blue-50 rounded-md transition">Smart Home</a></li>
            <li><a href="#" class="block py-2 px-3 hover:bg-blue-50 rounded-md transition">Componentes PC</a></li>
          </ul>
        </div>

        {/* <!-- Contenido principal --> */}
        <div class="md:w-3/4">
          {/* <!-- Carrusel de productos destacados --> */}
          <div class="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 class="text-xl font-semibold mb-4">Productos Destacados</h2>
            <div class="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
              {/* <!-- Carrusel simulado --> */}
              <div class="absolute inset-0 flex">
                <div class="w-full flex-none">
                  <img src="https://images.samsung.com/is/image/samsung/assets/latin_en/offer/test_students/banner_principal02.jpg?imwidth=2560" alt="Producto destacado" class="w-full h-full object-cover" />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                    <h3 class="text-xl font-bold">Smartphone Galaxy PRO</h3>
                    <p class="text-sm">El mejor smartphone del mercado con la mejor cámara</p>
                    <p class="text-lg font-bold mt-1">$699.99</p>
                  </div>
                </div>
              </div>
              {/* <!-- Controles del carrusel --> */}
              <div class="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                <button class="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none">
                  <i class="fas fa-chevron-left text-gray-800"></i>
                </button>
                <button class="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none">
                  <i class="fas fa-chevron-right text-gray-800"></i>
                </button>
              </div>
              {/* <!-- Indicadores del carrusel --> */}
              <div class="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                <button class="h-2 w-8 bg-blue-600 rounded-full"></button>
                <button class="h-2 w-2 bg-white rounded-full"></button>
                <button class="h-2 w-2 bg-white rounded-full"></button>
              </div>
            </div>
          </div>

          {/* <!-- Sección de recomendaciones --> */}
          <div class="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 class="text-xl font-semibold mb-4">Recomendados para ti</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* <!-- Productos --> */}
              {Products.slice(0,4).map(product => (
                <div key={product.id} class="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img class="w-full h-40 object-cover" src={product.image} alt={product.id} />
                  <div class="p-4">
                    <h3 class="font-semibold text-lg">{product.name}</h3>
                    {/* <div class="flex text-yellow-400 mt-1">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                      <span class="text-gray-500 ml-1 text-sm">(126)</span>
                    </div> */}
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-blue-600 font-bold">${product.price}</p>
                      <button onClick={() => addToCart(product)} 
                      class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition">
                        <i class="fas fa-shopping-cart mr-1"></i> Añadir
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            </div>
            <div class="text-center mt-4">
              <Link to="/Gallery" class="text-blue-600 hover:underline font-medium">Ver más recomendaciones</Link>
             
            </div>
          </div>

          {/* <!-- Ofertas especiales --> */}
          <div class="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 class="text-xl font-semibold mb-4">Ofertas especiales</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="relative rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 h-40">
                <div class="p-4 text-white">
                  <h3 class="text-xl font-bold">¡50% OFF en Accesorios!</h3>
                  <p class="mt-1">Solo por tiempo limitado</p>
                  <button class="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">Ver ofertas</button>
                </div>
                <div class="absolute right-0 bottom-0">

                </div>
              </div>
              <div class="relative rounded-lg overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 h-40">
                <div class="p-4 text-white">
                  <h3 class="text-xl font-bold">Nuevos Smartphones</h3>
                  <p class="mt-1">¡Aprovecha nuestras promociones!</p>
                  <button class="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">Descubrir</button>
                </div>
                <div class="absolute right-0 bottom-0">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}