import React from 'react';
import { Link } from 'react-router-dom';

export const ProductManagement = () => {
  const products = [
    {
      _id: 123123,
      name: "Shirt",
      price: 110,
      sku: "123123213",
    },
  ];

const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this product?")) {
    console.log("Deleting product with id:", id);
    // Add actual delete logic here (e.g., API call or state update)
  }
};


  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left bg-gray-100 text-xs uppercase text-gray-700">
          <thead>
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price}</td>
                  <td className="p-4">
                   <Link
  to={`/admin/products/${product._id}/edit`}
  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:text-yellow-600"
>
  Edit
</Link>

                    <button 
                     onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      
                      >
                        Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

