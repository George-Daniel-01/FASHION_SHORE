import React from 'react'
import { HiShoppingBag, HiArrowPathRoundedSquare, HiOutlineCreditCard } from "react-icons/hi2";



export const FeacturedSection = () => {
  return (
 <section className="py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full bg-gray-100 mb-4">
            <HiShoppingBag className="text-3xl text-gray-800" />
          </div>
          <h3 className="text-lg font-semibold">INTERNATIONAL SHIPPING</h3>
          <p className="text-gray-600 text-sm tracking-tight">
            On all orders over $100.00
          </p>
        </div>
       {/* Feature 2 */}
<div className="flex flex-col items-center">
  <div className="p-4 rounded-full bg-gray-100 mb-4">
    <HiArrowPathRoundedSquare className="text-3xl text-gray-800" />
  </div>
  <h4 className="text-lg font-semibold tracking-tight mb-2">
    30 DAYS RETURN
  </h4>
  <p className="text-gray-600 text-sm tracking-tight">
    Money back guarantee!
  </p>
</div>
        {/* {Feature 3} */}
     <div className="flex flex-col items-center">
  <div className="p-4 bg-gray-100 rounded-full mb-4">
    <HiOutlineCreditCard className="text-3xl" />
  </div>

  <h4 className="tracking-tight font-semibold mb-2">SECURE CHECKOUT</h4>

  <p className="text-gray-600 text-sm tracking-tight">
    100% secured checkout process
  </p>
</div>

      </div>
    </section>
  );
}
