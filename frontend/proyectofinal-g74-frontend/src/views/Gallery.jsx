import React from "react";

export default function Gallery() {
  return <div class="bg-gray-100">
    {/* <!-- Barra de búsqueda --> */}
    <div class="bg-white border-b">
        <div class="container mx-auto py-4 px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="w-full md:w-1/2 mb-4 md:mb-0">
                    <div class="flex items-center w-full">
                        <input type="text" placeholder="Buscar productos..." class="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <button class="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex justify-end space-x-2">
                    <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                        <option value="relevance">Relevancia</option>
                        <option value="price_asc">Precio: menor a mayor</option>
                        <option value="price_desc">Precio: mayor a menor</option>
                        <option value="newest">Más recientes</option>
                        <option value="popular">Más populares</option>
                    </select>
                    <div class="flex border border-gray-300 rounded-lg overflow-hidden">
                        <button class="px-3 py-2 bg-white text-gray-600 hover:bg-gray-100 active:bg-blue-50 active:text-blue-600">
                            <i class="fas fa-th-large"></i>
                        </button>
                        <button class="px-3 py-2 bg-gray-100 text-blue-600 hover:bg-gray-100">
                            <i class="fas fa-list"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Contenido principal --> */}
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row gap-6">
            {/* <!-- Filtros laterales (visible en desktop) --> */}
            <div class="hidden md:block md:w-1/4 lg:w-1/5">
                <div class="bg-white rounded-lg shadow-md p-6 sticky top-6">
                    <h2 class="text-lg font-semibold mb-4">Filtros</h2>
                    
                    {/* <!-- Categorías --> */}
                    <div class="mb-6">
                        <h3 class="font-medium mb-2">Categorías</h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input id="cat-all" type="checkbox" checked class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cat-all" class="ml-2 text-gray-700">Todas</label>
                            </div>
                            <div class="flex items-center">
                                <input id="cat-electronics" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cat-electronics" class="ml-2 text-gray-700">Electrónicos</label>
                            </div>
                            <div class="flex items-center">
                                <input id="cat-computers" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cat-computers" class="ml-2 text-gray-700">Computadoras</label>
                            </div>
                            <div class="flex items-center">
                                <input id="cat-mobile" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cat-mobile" class="ml-2 text-gray-700">Celulares</label>
                            </div>
                            <div class="flex items-center">
                                <input id="cat-audio" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cat-audio" class="ml-2 text-gray-700">Audio y Video</label>
                            </div>
                            <div class="flex items-center">
                                <input id="cat-accessories" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cat-accessories" class="ml-2 text-gray-700">Accesorios</label>
                            </div>
                        </div>
                        <button class="text-blue-600 hover:underline text-sm mt-2">Ver más</button>
                    </div>
                    
                    {/* <!-- Rango de precio --> */}
                    <div class="mb-6">
                        <h3 class="font-medium mb-2">Precio</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between gap-4">
                                <div class="w-1/2">
                                    <label class="text-xs text-gray-500">Mínimo</label>
                                    <input type="number" placeholder="$0" min="0" class="w-full px-3 py-1 border border-gray-300 rounded"/>
                                </div>
                                <div class="w-1/2">
                                    <label class="text-xs text-gray-500">Máximo</label>
                                    <input type="number" placeholder="$1000" min="0" class="w-full px-3 py-1 border border-gray-300 rounded"/>
                                </div>
                            </div>
                            <input type="range" min="0" max="1000" value="500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                        </div>
                    </div>
                    
                    {/* <!-- Estado del producto --> */}
                    <div class="mb-6">
                        <h3 class="font-medium mb-2">Estado</h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input id="cond-all" type="checkbox" checked class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cond-all" class="ml-2 text-gray-700">Todos</label>
                            </div>
                            <div class="flex items-center">
                                <input id="cond-new" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cond-new" class="ml-2 text-gray-700">Nuevo</label>
                            </div>
                            <div class="flex items-center">
                                <input id="cond-used" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cond-used" class="ml-2 text-gray-700">Usado</label>
                            </div>
                            <div class="flex items-center">
                                <input id="cond-refurbished" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="cond-refurbished" class="ml-2 text-gray-700">Reacondicionado</label>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Valoración --> */}
                    <div class="mb-6">
                        <h3 class="font-medium mb-2">Valoración</h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input id="rating-5" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="rating-5" class="ml-2 flex items-center">
                                    <div class="flex text-yellow-400">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </label>
                            </div>
                            <div class="flex items-center">
                                <input id="rating-4" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="rating-4" class="ml-2 flex items-center">
                                    <div class="flex text-yellow-400">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="text-gray-300 ml-1">
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="text-gray-500 ml-1 text-sm">o más</span>
                                </label>
                            </div>
                            <div class="flex items-center">
                                <input id="rating-3" type="checkbox" class="h-4 w-4 text-blue-600 rounded"/>
                                <label for="rating-3" class="ml-2 flex items-center">
                                    <div class="flex text-yellow-400">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="text-gray-300 ml-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <span class="text-gray-500 ml-1 text-sm">o más</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Botones de filtro --> */}
                    <div class="flex space-x-4 mt-6">
                        <button class="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                            Aplicar filtros
                        </button>
                        <button class="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition">
                            Limpiar
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Filtros móviles (visible en mobile) --> */}
            <div class="md:hidden w-full mb-4">
                <button class="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm flex justify-between items-center">
                    <span class="font-medium">Filtros</span>
                    <i class="fas fa-filter"></i>
                </button>
            </div>
            
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
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <a href="product-detail.html" class="block relative">
                            <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Smartphone Ultra" class="w-full h-48 sm:h-56 object-cover"/>
                            <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">-15%</span>
                            <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
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
                    
                    {/* <!-- Producto 2 --> */}
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <a href="product-detail.html" class="block relative">
                            <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Laptop Pro" class="w-full h-48 sm:h-56 object-cover"/>
                            <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
                        </a>
                        <div class="p-4">
                            <a href="product-detail.html">
                                <h3 class="font-medium text-gray-900 mb-1">Laptop Pro M2 16GB RAM 512GB SSD</h3>
                            </a>
                            <p class="text-sm text-gray-500 mb-1">Laptop • Apple</p>
                            <div class="flex text-yellow-400 mb-2 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="text-gray-500 ml-1">(95)</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="font-bold text-blue-600">$1,499.99</span>
                                </div>
                                <button class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Producto 3 --> */}
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <a href="product-detail.html" class="block relative">
                            <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Auriculares Bluetooth" class="w-full h-48 sm:h-56 object-cover"/>
                            <span class="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">Nuevo</span>
                            <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
                        </a>
                        <div class="p-4">
                            <a href="product-detail.html">
                                <h3 class="font-medium text-gray-900 mb-1">Auriculares Bluetooth Pro Noise Cancelling</h3>
                            </a>
                            <p class="text-sm text-gray-500 mb-1">Audio • Sony</p>
                            <div class="flex text-yellow-400 mb-2 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span class="text-gray-500 ml-1">(42)</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="font-bold text-blue-600">$199.99</span>
                                </div>
                                <button class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Producto 4 --> */}
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <a href="product-detail.html" class="block relative">
                            <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Smartwatch" class="w-full h-48 sm:h-56 object-cover"/>
                            <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
                        </a>
                        <div class="p-4">
                            <a href="product-detail.html">
                                <h3 class="font-medium text-gray-900 mb-1">Smartwatch Series 8 GPS + Celular</h3>
                            </a>
                            <p class="text-sm text-gray-500 mb-1">Wearables • Apple</p>
                            <div class="flex text-yellow-400 mb-2 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span class="text-gray-500 ml-1">(67)</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="font-bold text-blue-600">$399.99</span>
                                </div>
                                <button class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Producto 5 --> */}
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <a href="product-detail.html" class="block relative">
                            <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Monitor Gaming" class="w-full h-48 sm:h-56 object-cover"/>
                            <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
                        </a>
                        <div class="p-4">
                            <a href="product-detail.html">
                                <h3 class="font-medium text-gray-900 mb-1">Monitor Gaming 27" 144Hz 4K UHD</h3>
                            </a>
                            <p class="text-sm text-gray-500 mb-1">Monitor • LG</p>
                            <div class="flex text-yellow-400 mb-2 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span class="text-gray-500 ml-1">(31)</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="font-bold text-blue-600">$349.99</span>
                                </div>
                                <button class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Producto 6 --> */}
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <a href="product-detail.html" class="block relative">
                            <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Teclado Mecánico" class="w-full h-48 sm:h-56 object-cover"/>
                            <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">-20%</span>
                            <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
                        </a>
                        <div class="p-4">
                            <a href="product-detail.html">
                                <h3 class="font-medium text-gray-900 mb-1">Teclado Mecánico RGB para Gaming</h3>
                            </a>
                            <p class="text-sm text-gray-500 mb-1">Periféricos • Logitech</p>
                            <div class="flex text-yellow-400 mb-2 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <i class="far fa-star"></i>
                                <span class="text-gray-500 ml-1">(54)</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="text-gray-400 line-through text-sm">$129.99</span>
                                    <span class="font-bold text-blue-600 block">$99.99</span>
                                </div>
                                <button class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Producto 7 --> */}
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <a href="product-detail.html" class="block relative">
                            <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Cámara DSLR" class="w-full h-48 sm:h-56 object-cover"/>
                            <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
                        </a>
                        <div class="p-4">
                            <a href="product-detail.html">
                                <h3 class="font-medium text-gray-900 mb-1">Cámara DSLR Profesional 24.1MP</h3>
                            </a>
                            <p class="text-sm text-gray-500 mb-1">Fotografía • Canon</p>
                            <div class="flex text-yellow-400 mb-2 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="text-gray-500 ml-1">(89)</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="font-bold text-blue-600">$899.99</span>
                                </div>
                                <button class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Producto 8 --> */}
                    <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <a href="product-detail.html" class="block relative">
                            <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Tablet Pro" class="w-full h-48 sm:h-56 object-cover"/>
                            <span class="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-md">Destacado</span>
                            <button class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                                <i class="far fa-heart text-gray-600"></i>
                            </button>
                        </a>
                        <div class="p-4">
                            <a href="product-detail.html">
                                <h3 class="font-medium text-gray-900 mb-1">Tablet Pro 10.9" 256GB WIFI</h3>
                            </a>
                            <p class="text-sm text-gray-500 mb-1">Tablet • Apple</p>
                            <div class="flex text-yellow-400 mb-2 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span class="text-gray-500 ml-1">(112)</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="font-bold text-blue-600">$799.99</span>
                                </div>
                                <button class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
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