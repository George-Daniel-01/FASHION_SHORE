import React from 'react'
import { MyOrdersPage } from './MyOrdersPage';

export const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

          {/* Left Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
            <p className="text-gray-600 mb-4">johndoe@email.com</p>

            <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
              Logout
            </button>
          </div>

          {/* Right Section: Orders Table */}
          <div className="w-full md:w-2/3 lg:w-3/4">
          <MyOrdersPage/>
            {/* You can add your table or content here */}
          {/*   <h2 className="text-xl font-semibold mb-4">My Orders</h2>
            <p className="text-gray-500">No orders found.</p> */}
          </div>

        </div>
      </div>
    </div>
  );
}
