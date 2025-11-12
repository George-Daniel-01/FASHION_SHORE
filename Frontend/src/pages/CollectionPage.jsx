import React, { useEffect, useRef, useState } from 'react'
import productImg1 from "../assets/register.webp";
import { FaFilter } from "react-icons/fa";
import { SortOptions } from '../components/Products/SortOptions';
import { ProductsGrids } from '../components/Products/ProductsGrids';
import { FilterSidebar } from '../components/Products/FilterSidebar';



export const CollectionPage = () => {
  const [products, setProducts] = useState([])
  const sidebarRef = useRef(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  
const handleClickOutside = (e) => {
  // Close sidebar if clicked outside
  if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
    setIsSidebarOpen(false);
  }
};

useEffect(() => {
  // Add event listener for clicks
  document.addEventListener("mousedown", handleClickOutside);

  // Cleanup: remove listener when component unmounts
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

useEffect(() => {
  // Optional: You can add any effect related to sidebar here
}, []);

 useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          id: 1,
          name: "Product 1",
          price: 100,
          images: [productImg1],
        },
        {
          id: 2,
          name: "Product 2",
          price: 120,
          images: [productImg1],
        },
        {
          id: 3,
          name: "Product 3",
          price: 90,
          images: [productImg1],
        },
        {
          id: 4,
          name: "Product 4",
          price: 150,
          images: [productImg1],
        },
        {
          id: 5,
          name: "Product 5",
          price: 110,
          images: [productImg1],
        },
        {
          id: 6,
          name: "Product 6",
          price: 95,
          images: [productImg1],
        },
        {
          id: 7,
          name: "Product 7",
          price: 130,
          images: [productImg1],
        },
        {
          id: 8,
          name: "Product 8",
          price: 80,
          images: [productImg1],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);
  return (
<div className="border p-2 flex flex-col lg:flex-row  justify-center items-center">
  {/* Mobile Filter button */}
  <button onClick={toggleSidebar} className="lg:hidden border p-2 justify-center flex items-center gap-2">
    <FaFilter  className="mr-2"/>
    Filter
  </button>

  {/* {Filter Sidebar} */}
  <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed  inset-y-0 z-50
  left-0 w-64 bg-white  overflow-auto transition-transform duration-300 lg:static lg:translate-x-0:`}>
  <FilterSidebar/>
  </div>
  <div className="flex-grow p-4">
  <h2 className="text-2x1 uppercase md-4">All  Collection  </h2>

  {/* Sort Option */}
  <SortOptions/>

  {/* Prduct Grid */}
  <ProductsGrids products={products}/>
  </div>
</div> 

  )
}
