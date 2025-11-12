import React from 'react'
import {IoMdClose} from "react-icons/io"
import { CartContents } from '../Cart/CartContents'
import { Link, useNavigate } from "react-router-dom"; 
export const CartDrawer = ({drawerOPen, toggleCartDrawer}) => {
  
const navigate = useNavigate()
  const handleCheckout =  () => {
    navigate("/cheackout")
  }

  return (
  <>
  {/* w-3/4 */}
<div className={`fixed top-0 right-0  w-10/12 sm:w-1/2  md:w-[30rem] h-full bg-white shadow-lg 
    transform transition-transform duration-300 flex flex-col z-50  
    ${drawerOPen ? "translate-x-0": "translate-x-full"}`}>

<div className="flex justify-end p-4">
<button onClick={toggleCartDrawer}>
  <IoMdClose className="h-6 w-6 text-gray-600 "/>
</button>
</div>
{/* Cart contents with scrollable area */}
 <div className="flex-grow p-4 overflow-y-auto">
<h2 className="text-xl font-semibold mb-4">Your Cart</h2>
<CartContents/>

 </div>

{/* {Check button fixed at the buttom} */}
<div className="p-4 bg-white sticky bottom-0">
<button
 onClick={handleCheckout}
 className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">Check</button>
<p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
  Shipping, taxes, and discount codes caculated at checkout.
</p>
</div>
</div>
  </>
  )
}
