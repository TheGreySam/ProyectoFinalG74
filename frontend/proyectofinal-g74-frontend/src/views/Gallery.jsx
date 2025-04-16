import React from "react";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useFavorites } from "../context/FavoritesContext.jsx";
import Products from "../data/Products.js";

// const mockProducts = [
//     { id: 1, name: "Producto 1", price: 100, oldPrice: 200, image: "https://picsum.photos/200/100", brand: "Marca 1", isNew: true, stock: 4 },
//     { id: 2, name: "Producto 2", price: 200, oldPrice: 400, image: "https://picsum.photos/200/200", brand: "Marca 2", isNew: false, stock: 1 },
//     { id: 3, name: "Producto 3", price: 300, oldPrice: 600, image: "https://picsum.photos/200/300", brand: "Marca 3", isNew: false, stock: 13 },
//     { id: 4, name: "Producto 4", price: 400, oldPrice: 500, image: "https://picsum.photos/200/400", brand: "Marca 3", isNew: true, stock: 9 },
//     { id: 5, name: "Producto 5", price: 500, oldPrice: 500, image: "https://picsum.photos/200/500", brand: "Marca 5", isNew: false, stock: 0 },
//     { id: 6, name: "Producto 6", price: 600, oldPrice: 600, image: "https://picsum.photos/200/600", brand: "Marca 3", isNew: false, stock: 0 },
//     { id: 7, name: "Producto 7", price: 700, oldPrice: 2000, image: "https://picsum.photos/200/700", brand: "Marca 9", isNew: true, stock: 10 },
//     { id: 8, name: "Producto 8", price: 800, oldPrice: 2100, image: "https://picsum.photos/200/800", brand: "Marca 6", isNew: false, stock: 1 },
// ];

export default function Gallery() {
    const { addToCart } = useCart();
    const { toggleFavorite, isFavorite } = useFavorites();

    return <div class="bg-gray-100">
        {/* <!-- Barra de búsqueda --> */}
        <div class="bg-white border-b">
            <div class="container mx-auto py-4 px-4">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="w-full md:w-1/2 mb-4 md:mb-0">
                        <div class="flex items-center w-full">
                            <input type="text" placeholder="Buscar productos..." class="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
                                    <input id="cat-all" type="checkbox" checked class="h-4 w-4 text-blue-600 rounded" />
                                    <label for="cat-all" class="ml-2 text-gray-700">Todas</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="cat-electronics" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
                                    <label for="cat-electronics" class="ml-2 text-gray-700">Electrónicos</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="cat-computers" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
                                    <label for="cat-computers" class="ml-2 text-gray-700">Computadoras</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="cat-mobile" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
                                    <label for="cat-mobile" class="ml-2 text-gray-700">Celulares</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="cat-audio" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
                                    <label for="cat-audio" class="ml-2 text-gray-700">Audio y Video</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="cat-accessories" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
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
                                        <input type="number" placeholder="$0" min="0" class="w-full px-3 py-1 border border-gray-300 rounded" />
                                    </div>
                                    <div class="w-1/2">
                                        <label class="text-xs text-gray-500">Máximo</label>
                                        <input type="number" placeholder="$1000" min="0" class="w-full px-3 py-1 border border-gray-300 rounded" />
                                    </div>
                                </div>
                                <input type="range" min="0" max="1000" value="500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                            </div>
                        </div>

                        {/* <!-- Estado del producto --> */}
                        <div class="mb-6">
                            <h3 class="font-medium mb-2">Estado</h3>
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <input id="cond-all" type="checkbox" checked class="h-4 w-4 text-blue-600 rounded" />
                                    <label for="cond-all" class="ml-2 text-gray-700">Todos</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="cond-new" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
                                    <label for="cond-new" class="ml-2 text-gray-700">Nuevo</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="cond-used" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
                                    <label for="cond-used" class="ml-2 text-gray-700">Usado</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="cond-refurbished" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
                                    <label for="cond-refurbished" class="ml-2 text-gray-700">Reacondicionado</label>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Valoración --> */}
                        <div class="mb-6">
                            <h3 class="font-medium mb-2">Valoración</h3>
                            <div class="space-y-2">
                                <div class="flex items-center">
                                    <input id="rating-5" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
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
                                    <input id="rating-4" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
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
                                    <input id="rating-3" type="checkbox" class="h-4 w-4 text-blue-600 rounded" />
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
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                        {/* <!-- Productos --> */}
                        {Products.map(product => (
                            <div key={product.id} class={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow
                            ${product.stock === 0 ? "opacity-50 grayscale" : ""}`}>
                                {/* <a href="product-detail.html" class="block relative">
                                    <img src={product.image} alt={product.id} class="w-full h-48 sm:h-56 object-cover" />
                                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                                        {product.price < product.oldPrice && (
                                            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                -{Math.round(100 - (product.price * 100) / product.oldPrice)}%
                                            </span>
                                        )}
                                        {product.isNew && (
                                            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                Nuevo
                                            </span>
                                        )}
                                        {product.stock === 0 && (
                                            <span className="bg-gray-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                Agotado
                                            </span>
                                        )}
                                    </div>
                                    <button onClick={() => toggleFavorite(product)} 
                                    class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100">
                                        {isFavorite(product.id) ? (
                                            <i class="fas fa-heart text-red-600"></i>
                                        ) : (
                                            <i class="far fa-heart text-gray-600"></i>
                                        )}
                                        
                                    </button>
                                </a> */}
                                <div className="block relative">
                                    <img src={product.image} alt={product.id} class="w-full h-48 sm:h-56 object-cover" />
                                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                                        {product.price < product.oldPrice && (
                                            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                -{Math.round(100 - (product.price * 100) / product.oldPrice)}%
                                            </span>
                                        )}
                                        {product.isNew && (
                                            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                Nuevo
                                            </span>
                                        )}
                                        {product.stock === 0 && (
                                            <span className="bg-gray-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                                Agotado
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => toggleFavorite(product)}
                                        className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100"
                                    >
                                        {isFavorite(product.id) ? (
                                            <i className="fas fa-heart text-red-600"></i>
                                        ) : (
                                            <i className="far fa-heart text-gray-600"></i>
                                        )}
                                    </button>
                                </div>
                                <div class="p-4">
                                    {/* <a href="product-detail.html">
                                        <h3 class="font-medium text-gray-900 mb-1">{product.name}</h3>
                                    </a> */}
                                    <h3 class="font-medium text-gray-900 mb-1">{product.name}</h3>
                                    <p class="text-sm text-gray-500 mb-1">{product.brand}</p>
                                    {/* <div class="flex text-yellow-400 mb-2 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span class="text-gray-500 ml-1">(128)</span>
                            </div> */}
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <span class="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                                            <span class="font-bold text-blue-600 block">${product.price}</span>
                                        </div>
                                        <button onClick={() => addToCart(product)}

                                            // class="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition"
                                            className={` px-4 py-2 rounded-md text-white font-semibold transition ${product.stock === 0
                                                    ? "bg-gray-400 cursor-not-allowed"
                                                    : "bg-blue-600 hover:bg-blue-700"
                                                }`}
                                        >
                                            {product.stock === 0 ? "Sin stock" : <i class="fas fa-shopping-cart"></i>}


                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}




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