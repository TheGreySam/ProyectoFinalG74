import React from "react";

export default function CreatePost() {
  return <div class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        {/* <!-- Título de la página --> */}
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Crear Publicación</h1>
            <p class="text-gray-600">Completa el formulario para publicar tu producto</p>
        </div>

        {/* <!-- Formulario de creación de publicación --> */}
        <div class="bg-white rounded-lg shadow-md p-6">
            <form>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* <!-- Columna izquierda: Información básica --> */}
                    <div class="lg:col-span-2 space-y-6">
                        {/* <!-- Título del producto --> */}
                        <div>
                            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Título del producto*</label>
                            <input 
                                type="text" 
                                id="title" 
                                name="title" 
                                placeholder="Ej. Smartphone Samsung Galaxy S22 Ultra 256GB" 
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <p class="mt-1 text-xs text-gray-500">Un buen título atrae más compradores (máx. 100 caracteres)</p>
                        </div>

                        {/* <!-- Categoría y subcategoría --> */}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Categoría*</label>
                                <select 
                                    id="category" 
                                    name="category" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    <option value="" disabled selected>Seleccionar categoría</option>
                                    <option value="electronics">Electrónicos</option>
                                    <option value="computers">Computadoras</option>
                                    <option value="mobile">Celulares</option>
                                    <option value="accessories">Accesorios</option>
                                    <option value="audio">Audio y Video</option>
                                    <option value="photography">Fotografía</option>
                                    <option value="gaming">Videojuegos</option>
                                    <option value="smarthome">Smart Home</option>
                                </select>
                            </div>
                            <div>
                                <label for="subcategory" class="block text-sm font-medium text-gray-700 mb-1">Subcategoría</label>
                                <select 
                                    id="subcategory" 
                                    name="subcategory" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="" disabled selected>Primero selecciona categoría</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Estado y marca --> */}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="condition" class="block text-sm font-medium text-gray-700 mb-1">Estado*</label>
                                <select 
                                    id="condition" 
                                    name="condition" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    <option value="" disabled selected>Seleccionar estado</option>
                                    <option value="new">Nuevo</option>
                                    <option value="like-new">Como nuevo</option>
                                    <option value="good">Buen estado</option>
                                    <option value="fair">Estado aceptable</option>
                                    <option value="refurbished">Reacondicionado</option>
                                </select>
                            </div>
                            <div>
                                <label for="brand" class="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                                <input 
                                    type="text" 
                                    id="brand" 
                                    name="brand" 
                                    placeholder="Ej. Samsung, Apple, Sony..." 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* <!-- Precio y cantidad --> */}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="price" class="block text-sm font-medium text-gray-700 mb-1">Precio*</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span class="text-gray-500">$</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        id="price" 
                                        name="price" 
                                        min="0.01" 
                                        step="0.01" 
                                        placeholder="0.00" 
                                        class="pl-8 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Cantidad disponible*</label>
                                <input 
                                    type="number" 
                                    id="quantity" 
                                    name="quantity" 
                                    min="1" 
                                    value="1" 
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* <!-- Descripción --> */}
                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Descripción*</label>
                            <textarea 
                                id="description" 
                                name="description" 
                                rows="6" 
                                placeholder="Describe detalladamente tu producto. Incluye características, especificaciones, accesorios, razón de venta, etc." 
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            ></textarea>
                            <p class="mt-1 text-xs text-gray-500">Una descripción detallada hace que tu producto se venda más rápido</p>
                        </div>

                        {/* <!-- Especificaciones técnicas --> */}
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Especificaciones técnicas</label>
                            <div class="border border-gray-300 rounded-lg p-4 space-y-4">
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="Nombre (ej. Memoria RAM)" 
                                            class="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="Valor (ej. 16GB)" 
                                            class="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="Nombre (ej. Procesador)" 
                                            class="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            placeholder="Valor (ej. Intel i7)" 
                                            class="w-full px-3 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <button type="button" class="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                                    <i class="fas fa-plus-circle mr-1"></i> Añadir más especificaciones
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Columna derecha: Imágenes y opciones de publicación --> */}
                    <div class="space-y-6">
                        {/* <!-- Subida de imágenes --> */}
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Imágenes del producto*</label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <div class="space-y-2">
                                    <i class="fas fa-cloud-upload-alt text-gray-400 text-4xl"></i>
                                    <div class="text-gray-600">
                                        <p class="font-medium">Arrastra y suelta imágenes aquí</p>
                                        <p class="text-sm">o</p>
                                    </div>
                                    <button type="button" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                                        Seleccionar imágenes
                                    </button>
                                    <input type="file" class="hidden" multiple accept="image/*"/>
                                    <p class="text-xs text-gray-500 mt-2">Máximo 8 imágenes. Formato: JPG, PNG (máx. 5MB cada una)</p>
                                </div>
                            </div>
                            <div class="mt-4 grid grid-cols-4 gap-2">
                                <div class="relative h-20 bg-gray-100 rounded-md border flex items-center justify-center">
                                    <img src="https://images.samsung.com/is/image/samsung/assets/cl/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Black_PC.jpg?imbypass=true" alt="Vista previa" class="h-full w-full object-contain p-1"/>
                                    <button type="button" class="absolute top-0 right-0 -mr-2 -mt-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600">
                                        <i class="fas fa-times text-xs"></i>
                                    </button>
                                </div>
                                <div class="h-20 bg-gray-100 rounded-md border border-dashed flex items-center justify-center text-gray-400">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Opciones de envío --> */}
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Opciones de envío</label>
                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="shipping_free"
                                            name="shipping_options"
                                            type="checkbox"
                                            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="shipping_free" class="font-medium text-gray-700">Envío gratis</label>
                                        <p class="text-gray-500">Ofrece envío gratuito a los compradores</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="local_pickup"
                                            name="shipping_options"
                                            type="checkbox"
                                            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            checked
                                        />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="local_pickup" class="font-medium text-gray-700">Recogida local</label>
                                        <p class="text-gray-500">El comprador puede recoger el producto</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="shipping_cost"
                                            name="shipping_options"
                                            type="checkbox"
                                            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div class="ml-3 text-sm w-full">
                                        <label for="shipping_cost" class="font-medium text-gray-700">Costo de envío</label>
                                        <div class="mt-1">
                                            <input 
                                                type="number" 
                                                placeholder="$0.00" 
                                                min="0" 
                                                step="0.01" 
                                                class="w-full px-3 py-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Opciones de publicación --> */}
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Opciones de publicación</label>
                            <div class="space-y-3">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="featured_product"
                                            name="featured_product"
                                            type="checkbox"
                                            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="featured_product" class="font-medium text-gray-700">Destacar publicación</label>
                                        <p class="text-gray-500">Tu producto aparecerá en lugares destacados (+$5.00)</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="urgent_sale"
                                            name="urgent_sale"
                                            type="checkbox"
                                            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="urgent_sale" class="font-medium text-gray-700">Venta urgente</label>
                                        <p class="text-gray-500">Muestra tu producto como venta urgente (+$3.00)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Botones de acción --> */}
                <div class="flex justify-end mt-8 space-x-4">
                    <button type="button" class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
                        Guardar borrador
                    </button>
                    <button type="button" class="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
                        Vista previa
                    </button>
                    <button type="submit" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Publicar producto
                    </button>
                </div>
            </form>
        </div>
    </div>
  </div>;
}