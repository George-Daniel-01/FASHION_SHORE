import React from 'react'
import {TbBrandMeta} from "react-icons/tb"
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';

export const Topbar = () => {
  return (
   <>
   <div className="bg-[var(--color-rabbit-red)]   text-white">
   <div className="container mx-auto flex justify-between items-center py-3 py-4">
  <div className="hidden md:flex items-center space-x-4">
    <a href="#" className="hover:text-gray-300">
        <TbBrandMeta className="h-5 w-5"/>
    </a>
    <a href="#" className="hover:text-gray-300">
        <Instagram  className="h-5 w-5"/>
    </a>
    <a href="#" className="hover:text-gray-300">
        <Twitter className="h-4 w-5"/>
    </a>
  </div>
 <div className="text-sm text-center flex-grow">
    <span>
        WE ship worlswide - Fast and relianle shipping!
    </span>
 </div>
 <div className="text-sm hidden md:block">
<a href="tel:+123456734567" className="hover:text-gray-300">
    +1(234)23457
</a>
 </div>
   </div>
   </div>
   </>
  )
}

