import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from "../context/FavoritesContext";

export default function FavoritePosts() {
    const { favorites, toggleFavorite, isFavorite} = useFavorites();

    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold mb-4'>Favoritos</h2>
            {favorites.length === 0 ? (
                <p className="text-gray-500">No tienes publicaciones favoritas.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4 relative">
              <img src={product.image} className="w-full h-40 object-cover rounded-md" />
              <button
                onClick={() => toggleFavorite(product)}
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
              >
                X
              </button>
              <h3 className="mt-2 font-bold">{product.name}</h3>
              <p className="text-gray-500">${product.price}</p>
            </div>
          ))}
        </div>
            )}
        </div>

    );
}