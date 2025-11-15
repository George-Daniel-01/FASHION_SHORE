import React from 'react'
import { Link } from 'react-router-dom';

// Convert to an array
const orders = [
  {
    _id: 123123,
    user: { name: "John Doe" },
    totalPrice: 110,
    status: "Processing"
  }
];

export const AdminHomePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Revenue */}
        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-gray-600 mt-2">$12,000</p>
        </div>

        {/* Total Orders */}
        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-gray-600 mt-2">200</p>

          <Link to="/admin/orders" className="text-blue-500 hover:text-blue-700">
            Manage Orders
          </Link>
        </div>

        {/* Users */}
        <div className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-gray-600 mt-2">10</p>

          <Link to="/admin/products" className="text-blue-500 hover:text-blue-700">
            Manage Product
          </Link>
        </div>

      </div>

      {/* Recent Orders Table */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-200">
            <thead className="text-xs uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">{order.user.name}</td>
                    <td className="p-4">${order.totalPrice}</td>
                    <td className="p-4">{order.status}</td>
                    <td className="p-4">
                      <Link
                        to={`/admin/orders/${order._id}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-500">
                    No recent orders
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
};
