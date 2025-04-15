import React from 'react';

export default function Profile() {
  return <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
        {/* <!-- Título de la página --> */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Mi Perfil</h1>
            <p className="text-gray-600">Gestiona tu información personal y revisa tu actividad</p>
        </div>

        {/* <!-- Grid de contenido --> */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* <!-- Menú lateral --> */}
            <div class="lg:col-span-1">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-6 border-b text-center">
                        <div class="w-24 h-24 rounded-full bg-gray-200 mx-auto overflow-hidden mb-4">
                            <img src="https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-male-user-profile-icon-vector-illustraton-png-image_6489287.png" alt="Foto de perfil" class="w-full h-full object-cover"/>
                        </div>
                        <h2 class="text-xl font-semibold">Matias Rojas</h2>
                        <p class="text-gray-500 text-sm">Miembro desde enero 2025</p>
                        <p class="mt-2 flex items-center justify-center text-yellow-500">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="ml-1 text-gray-600">(4.8)</span>
                        </p>
                    </div>
                    <div class="p-4">
                        <ul class="space-y-1">
                            <li>
                                <a href="#" class="block px-4 py-2 bg-blue-50 text-blue-700 rounded-md font-medium">
                                    <i class="fas fa-user mr-2"></i>Información Personal
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                                    <i class="fas fa-shopping-bag mr-2"></i>Historial de Compras
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                                    <i class="fas fa-tag mr-2"></i>Mis Publicaciones
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                                    <i class="fas fa-heart mr-2"></i>Lista de Deseos
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                                    <i class="fas fa-comment mr-2"></i>Mensajes
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                                    <i class="fas fa-star mr-2"></i>Valoraciones
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                                    <i class="fas fa-cog mr-2"></i>Configuración
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mt-6 bg-white rounded-lg shadow-md p-4">
                    <h3 class="font-semibold text-gray-800 mb-3">Acciones rápidas</h3>
                    <div class="space-y-2">
                        <a href="product-form.html" class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition">
                            <i class="fas fa-plus-circle mr-1"></i> Crear publicación
                        </a>
                        <a href="#" class="block w-full text-center bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md transition">
                            <i class="fas fa-arrow-trend-up mr-1"></i> Promocionar productos
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- Contenido principal: Información personal --> */}
            <div class="lg:col-span-3">
                <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-xl font-semibold">Información Personal</h2>
                        <button class="text-blue-600 hover:text-blue-800 focus:outline-none">
                            <i class="fas fa-edit mr-1"></i> Editar
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-sm text-gray-600 mb-1">Nombre completo</h3>
                            <p class="font-medium">Carlos Rodríguez</p>
                        </div>
                        <div>
                            <h3 class="text-sm text-gray-600 mb-1">Correo electrónico</h3>
                            <p class="font-medium">carlos.rodriguez@ejemplo.com</p>
                        </div>
                        <div>
                            <h3 class="text-sm text-gray-600 mb-1">Teléfono</h3>
                            <p class="font-medium">+34 612 345 678</p>
                        </div>
                        <div>
                            <h3 class="text-sm text-gray-600 mb-1">Fecha de nacimiento</h3>
                            <p class="font-medium">15 de abril de 1990</p>
                        </div>
                        <div>
                            <h3 class="text-sm text-gray-600 mb-1">Ciudad</h3>
                            <p class="font-medium">Madrid</p>
                        </div>
                        <div>
                            <h3 class="text-sm text-gray-600 mb-1">País</h3>
                            <p class="font-medium">España</p>
                        </div>
                    </div>

                    <div class="mt-6 pt-6 border-t">
                        <h3 class="text-lg font-medium mb-4">Direcciones</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 border rounded-lg bg-gray-50">
                                <div class="flex justify-between">
                                    <h4 class="font-medium">Dirección Principal</h4>
                                    <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Predeterminada</span>
                                </div>
                                <p class="text-gray-600 mt-2">
                                    Calle Alcalá 123, 4º B<br/>
                                    28001 Madrid, España
                                </p>
                                <div class="mt-3 flex space-x-3">
                                    <button class="text-sm text-blue-600 hover:underline">Editar</button>
                                    <button class="text-sm text-gray-500 hover:underline">Eliminar</button>
                                </div>
                            </div>
                            <div class="p-4 border rounded-lg">
                                <div class="flex justify-between">
                                    <h4 class="font-medium">Dirección de Trabajo</h4>
                                </div>
                                <p class="text-gray-600 mt-2">
                                    Paseo de la Castellana 45, Planta 8<br/>
                                    28046 Madrid, España
                                </p>
                                <div class="mt-3 flex space-x-3">
                                    <button class="text-sm text-blue-600 hover:underline">Editar</button>
                                    <button class="text-sm text-gray-500 hover:underline">Eliminar</button>
                                    <button class="text-sm text-gray-500 hover:underline">Hacer predeterminada</button>
                                </div>
                            </div>
                        </div>
                        <button class="mt-4 text-blue-600 hover:text-blue-800 flex items-center">
                            <i class="fas fa-plus-circle mr-1"></i> Añadir nueva dirección
                        </button>
                    </div>
                </div>

                {/* <!-- Historial de compras recientes --> */}
                <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-xl font-semibold">Compras Recientes</h2>
                        <a href="#" class="text-blue-600 hover:text-blue-800 text-sm">Ver todas</a>
                    </div>
                    
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pedido</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">#OD78452</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">12 Mar 2025</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Entregado
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        $349.99
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <a href="#" class="text-blue-600 hover:text-blue-900">Detalles</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">#OD78421</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">28 Feb 2025</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            En camino
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        $129.99
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <a href="#" class="text-blue-600 hover:text-blue-900">Detalles</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">#OD78356</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">15 Feb 2025</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Entregado
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        $89.99
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <a href="#" class="text-blue-600 hover:text-blue-900">Detalles</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!-- Lista de deseos --> */}
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-xl font-semibold">Lista de Deseos</h2>
                        <a href="#" class="text-blue-600 hover:text-blue-800 text-sm">Ver todos</a>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* <!-- Producto 1 --> */}
                        <div class="border rounded-lg overflow-hidden hover:shadow-md transition">
                            <div class="relative">
                                <img src="https://m.media-amazon.com/images/I/61BKYlNqH6L._AC_SX679_.jpg" alt="Producto" class="w-full h-40 object-cover"/>
                                <button class="absolute top-2 right-2 text-red-500 bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow hover:bg-red-50">
                                    <i class="fas fa-heart"></i>
                                </button>
                            </div>
                            <div class="p-4">
                                <h3 class="font-medium">Cámara DSLR Pro</h3>
                                <div class="flex text-yellow-400 mt-1 text-xs">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <span class="text-gray-500 ml-1">(27)</span>
                                </div>
                                <div class="flex justify-between items-center mt-2">
                                    <p class="text-blue-600 font-bold">$699.99</p>
                                    <button class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm transition">
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
}