import React from 'react';
import { Link } from 'react-router-dom';

export default function MyPosts() {
    return <div class="bg-gray-100">
    

    {/* <!-- Contenido principal --> */}
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row gap-6">
            
            
            {/* <!-- Galería de productos --> */}
            <div class="w-full md:w-3/4 lg:w-4/5">
                {/* <!-- Información de resultados --> */}
                <div class="flex justify-between items-center mb-6">
                    <p class="text-gray-600">Mostrando 1-24 de 230 resultados</p>
                    <div class="flex items-center text-sm">
                        <span class="hidden sm:inline">Mostrar:</span>
                        <div class="flex border border-gray-300 rounded-lg overflow-hidden ml-2">
                            <button class="px-3 py-1 bg-blue-50 text-blue-600 border-r border-gray-300">24</button>
                            <button class="px-3 py-1 bg-white text-gray-700 border-r border-gray-300">48</button>
                            <button class="px-3 py-1 bg-white text-gray-700">96</button>
                        </div>
                    </div>
                </div>
            
                {/* <!-- Grilla de productos --> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* <!-- Producto 1 --> */}
                    <Link to="/DetallePublicacion/:id">
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <a href="product-detail.html" class="block relative">
                            <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Smartphone Ultra" class="w-full h-48 sm:h-56 object-cover"/>
                            <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">-15%</span>
                            
                        </a>
                        <div class="p-4">
                            <a href="product-detail.html">
                                <h3 class="font-medium text-gray-900 mb-1">Smartphone Ultra Pro Max 256GB</h3>
                            </a>
                            <p class="text-sm text-gray-500 mb-1">Smartphone • Samsung</p>
                            <div class="flex text-yellow-400 mb-2 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span class="text-gray-500 ml-1">(128)</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="text-gray-400 line-through text-sm">$999.99</span>
                                    <span class="font-bold text-blue-600 block">$849.99</span>
                                </div>
                                <button class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    
                    
                </div>
                
                {/* <!-- Paginación --> */}
                <div class="mt-10 flex justify-center">
                    <nav class="inline-flex rounded-md shadow-sm -space-x-px overflow-hidden">
                        <a href="#" class="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                            <i class="fas fa-chevron-left text-sm"></i>
                        </a>
                        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-blue-600 font-medium hover:bg-blue-50">
                            1
                        </a>
                        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                            2
                        </a>
                        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                            3
                        </a>
                        <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700">
                            ...
                        </span>
                        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                            10
                        </a>
                        <a href="#" class="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                            <i class="fas fa-chevron-right text-sm"></i>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  </div>;
}