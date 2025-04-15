import React from 'react';

export default function DetailPost() {
  return <div className='bg-gray-100'>
    <div class="bg-white">
        <div class="container mx-auto px-4 py-2">
            <div class="flex items-center text-sm text-gray-600">
                <a href="index.html" class="hover:text-blue-600">Inicio</a>
                <span class="mx-2">/</span>
                <a href="#" class="hover:text-blue-600">Electrónicos</a>
                <span class="mx-2">/</span>
                <span class="text-gray-900 font-medium">Smartphone Ultra Pro Max 256GB</span>
            </div>
        </div>
    </div>

    <div class="container mx-auto px-4 py-6">

        <div class="bg-white rounded-lg shadow-md p-4 md:p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div class="mb-4 rounded-lg overflow-hidden bg-gray-100">
                        <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Smartphone Ultra Pro" class="w-full h-auto object-contain p-4"/>
                    </div>
                    <div class="grid grid-cols-4 gap-2">
                        <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Vista 1" class="border rounded w-full h-20 object-cover cursor-pointer"/>
                        <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Vista 2" class="border rounded w-full h-20 object-cover cursor-pointer"/>
                        <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Vista 3" class="border rounded w-full h-20 object-cover cursor-pointer"/>
                        <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Vista 4" class="border rounded w-full h-20 object-cover cursor-pointer"/>
                    </div>
                </div>
                
                <div>
                    <h1 class="text-2xl font-bold text-gray-900 mb-2">Smartphone Ultra Pro Max 256GB</h1>
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400 mr-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <span class="text-gray-600 text-sm">(128 valoraciones)</span>
                    </div>
                    
                    <div class="mb-6">
                        <div class="mb-2">
                            <span class="text-gray-500 line-through text-lg">$999.99</span>
                            <span class="ml-2 text-red-600 text-sm">15% de descuento</span>
                        </div>
                        <div class="text-3xl font-bold text-blue-600">$849.99</div>
                        <p class="text-sm text-gray-600 mt-1">Impuestos incluidos</p>
                    </div>
                    
                    <div class="border-t border-b py-4 my-4">
                        <div class="mb-4">
                            <h3 class="font-medium mb-2">Color</h3>
                            <div class="flex space-x-3">
                                <button class="w-8 h-8 rounded-full bg-gray-800 border-2 border-blue-500"></button>
                                <button class="w-8 h-8 rounded-full bg-blue-600 border-2 border-transparent"></button>
                                <button class="w-8 h-8 rounded-full bg-red-600 border-2 border-transparent"></button>
                                <button class="w-8 h-8 rounded-full bg-white border-2 border-gray-300"></button>
                            </div>
                        </div>
                        
                        {/* <!-- Almacenamiento --> */}
                        <div class="mb-4">
                            <h3 class="font-medium mb-2">Almacenamiento</h3>
                            <div class="flex flex-wrap gap-2">
                                <button class="px-3 py-1 border border-gray-300 rounded-md">64GB</button>
                                <button class="px-3 py-1 border-2 border-blue-500 rounded-md bg-blue-50 text-blue-700 font-medium">256GB</button>
                                <button class="px-3 py-1 border border-gray-300 rounded-md">512GB</button>
                            </div>
                        </div>
                        
                        {/* <!-- Cantidad --> */}
                        <div>
                            <h3 class="font-medium mb-2">Cantidad</h3>
                            <div class="flex items-center">
                                <button class="w-8 h-8 bg-gray-100 border border-gray-300 flex items-center justify-center rounded-l-md">
                                    <i class="fas fa-minus text-gray-600"></i>
                                </button>
                                <input type="number" value="1" min="1" class="w-12 h-8 border-t border-b border-gray-300 text-center"/>
                                <button class="w-8 h-8 bg-gray-100 border border-gray-300 flex items-center justify-center rounded-r-md">
                                    <i class="fas fa-plus text-gray-600"></i>
                                </button>
                                <span class="ml-3 text-gray-600 text-sm">12 disponibles</span>
                            </div>
                        </div>
                    </div>
{/*                     
                    <!-- Botones de acción --> */}
                    <div class="flex space-x-3 mb-6">
                        <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition">
                            <i class="fas fa-cart-plus mr-2"></i> Añadir al carrito
                        </button>
                        <button class="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium transition">
                            <i class="fas fa-bolt mr-2"></i> Comprar ahora
                        </button>
                    </div>
{/*                     
                    <!-- Características --> */}
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <i class="fas fa-truck text-green-500 mt-1 mr-3 w-5"></i>
                            <div>
                                <h4 class="font-medium">Envío gratuito</h4>
                                <p class="text-sm text-gray-600">Entrega: 3-5 días hábiles</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-shield-alt text-blue-500 mt-1 mr-3 w-5"></i>
                            <div>
                                <h4 class="font-medium">Garantía de 2 años</h4>
                                <p class="text-sm text-gray-600">Contra defectos de fabricación</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-exchange-alt text-red-500 mt-1 mr-3 w-5"></i>
                            <div>
                                <h4 class="font-medium">Devoluciones</h4>
                                <p class="text-sm text-gray-600">30 días para devoluciones gratuitas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/*             
            <!-- Pestañas de información --> */}
            <div class="mt-8">
                <div class="border-b border-gray-200">
                    <div class="flex -mb-px">
                        <button class="mr-6 py-2 border-b-2 border-blue-600 font-medium text-blue-600">Descripción</button>
                        <button class="mr-6 py-2 border-b-2 border-transparent font-medium text-gray-500">Especificaciones</button>
                        <button class="mr-6 py-2 border-b-2 border-transparent font-medium text-gray-500">Valoraciones</button>
                    </div>
                </div>
{/*                 
                <!-- Contenido de la pestaña (descripción) --> */}
                <div class="py-4">
                    <h2 class="text-xl font-bold mb-4">Descripción del Producto</h2>
                    <p class="mb-4">El <strong>Smartphone Ultra Pro Max</strong> es nuestra última innovación en tecnología móvil. Con una pantalla AMOLED de 6.7 pulgadas y resolución 4K, ofrece una experiencia visual inigualable para disfrutar de tus contenidos favoritos.</p>
                    
                    <p class="mb-4">Equipado con el procesador más avanzado del mercado y 8GB de RAM, podrás ejecutar las aplicaciones más exigentes y juegos sin ningún tipo de lag. Su memoria interna de 256GB te permitirá almacenar todas tus fotos, videos y aplicaciones sin preocupaciones.</p>
                    
                    <h3 class="text-lg font-semibold mt-6 mb-2">Características destacadas:</h3>
                    <ul class="list-disc pl-6 mb-4 space-y-1">
                        <li>Pantalla AMOLED de 6.7" con resolución 4K Ultra HD</li>
                        <li>Procesador OctaCore de última generación</li>
                        <li>8GB de RAM y 256GB de almacenamiento interno</li>
                        <li>Sistema de cámaras avanzado con sensor principal de 108MP</li>
                        <li>Batería de 5000mAh con carga rápida de 65W</li>
                    </ul>
                </div>
            </div>
{/*             
            <!-- Productos relacionados --> */}
            <div class="mt-8">
                <h2 class="text-xl font-bold mb-4">Productos relacionados</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* <!-- Producto 1 --> */}
                    <div class="border rounded-lg overflow-hidden hover:shadow-md">
                        <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Accesorio" class="w-full h-32 object-cover"/>
                        <div class="p-3">
                            <h3 class="font-medium text-sm mb-1">Funda Premium Ultra Pro Max</h3>
                            <div class="text-sm text-blue-600 font-bold">$29.99</div>
                        </div>
                    </div>
{/*                     
                    <!-- Producto 2 --> */}
                    <div class="border rounded-lg overflow-hidden hover:shadow-md">
                        <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Accesorio" class="w-full h-32 object-cover"/>
                        <div class="p-3">
                            <h3 class="font-medium text-sm mb-1">Protector de Pantalla Ultra HD</h3>
                            <div class="text-sm text-blue-600 font-bold">$15.99</div>
                        </div>
                    </div>
{/*                     
                    <!-- Producto 3 --> */}
                    <div class="border rounded-lg overflow-hidden hover:shadow-md">
                        <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Accesorio" class="w-full h-32 object-cover"/>
                        <div class="p-3">
                            <h3 class="font-medium text-sm mb-1">Cargador Inalámbrico Rápido</h3>
                            <div class="text-sm text-blue-600 font-bold">$39.99</div>
                        </div>
                    </div>
                     
                    {/*<!-- Producto 4 --> */}
                    <div class="border rounded-lg overflow-hidden hover:shadow-md">
                        <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Accesorio" class="w-full h-32 object-cover"/>
                        <div class="p-3">
                            <h3 class="font-medium text-sm mb-1">Auriculares Bluetooth Pro</h3>
                            <div class="text-sm text-blue-600 font-bold">$59.99</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/*         
        <!-- Información del vendedor --> */}
        <div class="bg-white rounded-lg shadow-md p-4 md:p-6 mt-4">
            <h2 class="text-xl font-bold mb-4">Información del vendedor</h2>
            <div class="flex flex-col md:flex-row items-start">
                <div class="md:w-1/3 mb-4 md:mb-0">
                    <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                            <img src="/api/placeholder/100/100" alt="Vendedor" class="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <h3 class="font-semibold">TechWorld Official</h3>
                            <div class="flex text-yellow-400 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span class="text-gray-600 ml-1">(4.8)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="md:w-2/3 md:pl-4 md:border-l border-gray-200">
                    <h3 class="font-semibold mb-2">Políticas del vendedor</h3>
                    <div class="space-y-1 text-sm">
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                            <p>Garantía de productos 100% originales</p>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                            <p>Envío en 24h para pedidos antes de las 15:00h</p>
                        </div>
                        <div class="flex items-start">
                            <i class="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                            <p>30 días de devolución gratuita</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  </div>;
}