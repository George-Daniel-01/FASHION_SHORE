import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaypalButton } from './PaypalButton';

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

export const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // Correctly spelled function
  const handleCreateCheckout = (e) => {
    e.preventDefault();
    console.log("Shipping Info:", shippingAddress);
    setCheckoutId(123); // Example: sets checkoutId to show PayPal component
  };


  const handlePaymentSuccess = (details) => {
   console.log("Payment Successful", details )
   navigate("/order-confirmation")
  }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 tracking-tighter bg-white rounded-lg shadow-lg gap-8 max-w-7xl mx-auto py-10 px-6">
      {/* Left Section */}
      <div>
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>

        <form>
          {/* Contact Details */}
          <h3 className="text-lg mb-4 font-medium">Contact Details</h3>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full p-2 border rounded-md"
              disabled
            />
          </div>

          {/* Delivery Section */}
          <h3 className="text-lg mb-4 font-medium">Delivery</h3>

          {/* Name Fields */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, firstName: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, lastName: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, address: e.target.value })
              }
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* City & Postal Code */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, city: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Country & Phone */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Country</label>
              <input
                type="text"
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, country: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, phone: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Continue / PayPal */}
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="button"
                onClick={handleCreateCheckout}
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4 font-medium">Pay with PayPal</h3>
                <PaypalButton 
                amount={100} 
                onSuccess={handlePaymentSuccess} 
                onError={(err) => alert("Payment failed.Try again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
<div className="bg-gray-50 p-6 rounded-lg">
  <h3 className="text-lg mb-4 font-semibold">Order Summary</h3>

  <div className="border-t py-4 mb-4">
    {cart.products.map((product, index) => (
      <div
        key={index}
        className="flex items-start justify-between py-2 border-b"
      >
        <div className="flex items-start space-x-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-24 object-cover rounded"
          />
          <div>
            <h4 className="font-medium text-gray-800">{product.name}</h4>
            <p className="text-sm text-gray-500">
              Size: {product.size} | Color: {product.color}
            </p>
          </div>
        </div>
        <p className="font-semibold text-gray-700">${product.price}</p>
      </div>
    ))}
  </div>

<div className="flex justify-between items-center text-lg font-medium mt-4">
  <p>Subtotal</p>
  <p>${cart.totalPrice?.toLocaleString()}</p>
</div>
<div className="flex justify-between items-center text-lg">
  <p>Shipping</p>
  <p>Free</p>
</div>
<div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
  <p>Total</p>
  <p>${cart.totalPrice?.toLocaleString()}</p>
</div>

</div>
 </div>
  );
};
