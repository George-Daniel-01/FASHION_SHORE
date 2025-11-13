import React from 'react'

const checkout = {
  id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-Shirt",
      color: "Black",
      size: "M",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
 address: "123 Fashion Street",
  city: "New York",
  country: "USA",
  }
};
export const OrderComfirmation = () => {

const calculateEstimatedDelivery = (createdAt) => {
  const orderDate = new Date(createdAt); 
  orderDate.setDate(orderDate.getDate() + 10); // Add 10 day to the order date
  return orderDate.toLocaleDateString();

}
  return (
  <div className="p-6 bg-white">
  <div className="text-center text-emerald-700 mb-8">
    <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
        </h1>
  </div>

  {checkout && (
    <div className="p-6 rounded-lg border">
      <div className="flex justify-between mb-20">
        {/* Order ID and Date */}
 

      <div>
        <h2 className="text-xl font-semibold">
          Order ID: {checkout.id}
        </h2>
        <p className="text-gray-500">
       Order date    {new Date(checkout.createdAt).toLocaleDateString()}
        </p>
               </div>
        {/* {Estimated Delivery} */}
<div className="text-emerald-700 text-sm">
  Estimated Delivery:{" "}
  {calculateEstimatedDelivery(checkout.createdAt)}
</div>
      </div>
    {/* oredeed Item */}
<div className="mb-20">

  {checkout.checkoutItems.map((item) => (
    <div key={item.productId} className="flex items-center mb-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md mr-4"
      />
      <div>
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">
          Color: {item.color}, Size: {item.size}, Qty: {item.quantity}
        </p>
        <p className="text-sm font-semibold">${item.price}</p>
      </div>
    </div>
  ))}
</div>
  {/* Payment and Delivery Info */}
  <div className="grid grid-cols-2 gap-8">
  {/* Payment Info */}
  <div>
    <h4 className="text-lg font-semibold mb-2">Payment</h4>
    <p className="text-gray-600">Paid via PayPal</p>
  </div>

{/* Delivery Info */}
<div>
  <h4 className="text-lg font-semibold mb-2">Delivery</h4>
  <p className="text-gray-600">
    {checkout.shippingAddress.address}, {checkout.shippingAddress.city}, {checkout.shippingAddress.country}
  </p>
</div>
  <div>

  </div>
</div>
    </div>

    
  )}
</div>

  )
}
