import React, { useState } from "react";

export const UserManagement = () => {
  const [formData, setFormData] = useState({
    _id:1232,
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent page reload
  console.log(formData); // Log form data

  // Reset the form after submission
  setFormData({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });
};
  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
    }
  ];


  const handleRoleChange = (userId, newRole ) => {
  console.log({id: userId, role: newRole})
  }


const handleDeleteUser = (userId) => {
  if (window.confirm("Are you sure you want to delete this user?")) {
    console.log("Deleting user with ID:", userId);
  }
};


  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      <div className="p-6 rounded-lg mb-6 bg-white shadow">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-lg mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handlechange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-lg mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-lg mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handlechange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block text-lg mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handlechange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded "
          >
            Add User
          </button>
        </form>
      </div>

      {/* /User List Management */}
<div className="shadow-md sm:rounded-lg overflow-x-auto">
  <table className="min-w-full text-left bg-gray-100 text-xs uppercase text-gray-700">
    <thead>
      <tr>
        <th className="py-3 px-4">Name</th>
        <th className="py-3 px-4">Email</th>
        <th className="py-3 px-4">Role</th>
        <th className="py-3 px-4">Actions</th>
      </tr>
    </thead>
<tbody>
  {users.map((user) => (
    <tr key={user._id} className="border-b hover:bg-gray-50">
      <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
        {user.name}
      </td>
      <td className="p-4">
        <select
          value={user.role}
          onChange={(e) =>  handleRoleChange( e.target.value)}
          className="border rounded p-2"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
      </td>
<td className="p-4">
  <button
    onClick={() => handleDeleteUser(user._id)}
    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
  >
    Delete
  </button>
</td>

    </tr>
  ))}
</tbody>

  </table>
</div>

    </div>
  );
};
