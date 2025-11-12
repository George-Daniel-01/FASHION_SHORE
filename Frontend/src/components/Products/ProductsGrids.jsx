import React from "react";
import { Link } from "react-router-dom"; // ✅ required import


export const ProductsGrids = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} className="block">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="w-full h-64 mb-4">
              <img
                src={product.images[0]}  // ✅ correct image access
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-gray-800 font-semibold">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
