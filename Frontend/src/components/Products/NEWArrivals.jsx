import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import WomanCollectionImage from "../../assets/womens-collection.webp";

export const NEWArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      image: [{ url: WomanCollectionImage, altText: "Stylish Jacket" }],
    },
    {
      _id: "2",
      name: "Stylish Jacket 2",
      price: 130,
      image: [{ url: WomanCollectionImage, altText: "Stylish Jacket 2" }],
    },
    {
      _id: "3",
      name: "Stylish Jacket 3",
      price: 130,
      image: [{ url: WomanCollectionImage, altText: "Stylish Jacket 3" }],
    },
    {
      _id: "4",
      name: "Stylish Jacket 4",
      price: 130,
      image: [{ url: WomanCollectionImage, altText: "Stylish Jacket 4" }],
    },
    {
      _id: "5",
      name: "Stylish Jacket 5",
      price: 130,
      image: [{ url: WomanCollectionImage, altText: "Stylish Jacket 5" }],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const leftScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(leftScroll < maxScroll);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <section className="py-16 px-4">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Explore New Arrivals</h1>
        <p className="text-lg text-gray-600">
          Discover the latest styles freshly added to elevate your wardrobe.
        </p>
      </div>

      {/* Arrows */}
      <div className="flex justify-end mb-4 space-x-3">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`p-2 rounded border ${
            canScrollLeft
              ? "bg-white text-black"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <FiChevronLeft className="text-2xl" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`p-2 rounded border ${
            canScrollRight
              ? "bg-white text-black"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <FiChevronRight className="text-2xl" />
        </button>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`overflow-x-auto flex space-x-6 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[85%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[25%] relative"
          >
            <img
              src={product.image[0].url}
              alt={product.image[0].altText}
              className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover rounded-lg"
              draggable="false"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white py-4 px-3 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
