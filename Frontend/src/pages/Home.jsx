import React from 'react'
import { Hero } from '../components/Layout/Hero'
import { GenderCollection } from '../components/Products/GenderCollection'
import { NEWArrivals } from '../components/Products/NEWArrivals'
import { ProductDetails } from '../components/Products/ProductDetails'
import { ProductsGrids } from '../components/Products/ProductsGrids'
import productImg1 from "../assets/register.webp";
import { FeacturedCollection } from '../components/Products/FeacturedCollection'
import { FeacturedSection } from '../components/Products/FeacturedSection'
const placeholderProducts = [
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


export const Home = () => {
  return (
   <>
   <div>
    <Hero/>
    <GenderCollection/>
    <NEWArrivals/>

    {/* /Best Seller */}
    <h2 className="text-3xl text-center font-bold mb-4">
        Best Seller
    </h2>
  
    <ProductDetails/>
 
  <div className="container mx-auto">
  <h2 className="text-3xl text-center font-bold mb-4">
    Top Wears for Women
  </h2>
<ProductsGrids products={placeholderProducts}/>  
</div>

<FeacturedCollection/>
<FeacturedSection/>
   </div>
   </>
  )
}
