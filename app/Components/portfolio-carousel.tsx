"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "./Ui/card";
import useEmblaCarousel from "embla-carousel-react";

const products = [
  {
    id: 1,
    name: "5Kg Fertilizer Bags",
    size: "5Kg",
    price: 21,
    originalPrice: 23,
    description: "Modern fertilizer bag with premium quality printing",

    // Only 3 colors
    colors: [
      {
        name: "green",
        code: "#22C55E",
        image: "/images/green5kgcopys.png",
      },
      {
        name: "orange",
        code: "#F97316",
        image: "/images/orange5kgcopys.png",
      },
      {
        name: "blue",
        code: "#3B82F6",
        image: "/images/blue5kgcopys.png",
      },
    ],

    available: true,
  },

  {
    id: 2,
    name: "10Kg Fertilizer Bags",
    size: "10Kg",
    price: 24,
    originalPrice: 26,
    description: "Premium NPK fertilizer packaging",

    colors: [
       {
        name: "blue",
        code: "#3B82F6",
        image: "/images/blue5kgcopys.png",
      },
      {
        name: "green",
        code: "#22C55E",
        image: "/images/green5kgcopys.png",
      },
      {
        name: "orange",
        code: "#F97316",
        image: "/images/orange5kgcopys.png",
      },
     
    ],

    available: true,
  },

  {
    id: 3,
    name: "25Kg Fertilizer Bags",
    size: "25Kg",
    price: 34,
    originalPrice: 37,
    description: "Modern fertilizer bag with premium quality printing",

    colors: [
      {
        name: "red",
        code: "#D90445",
        image: "/images/red25kg.png",
      },
      {
        name: "green",
        code: "#22C55E",
        image: "/images/green25kg.webp",
      },
      { 
        name: "orange",
        code: "#F97316",
        image: "/images/all25kg.webp",
      },
    ],

    available: true,
  },

  {
    id: 4,
    name: "50Kg Fertilizer Bags",
    size: "50Kg",
    price: 45,
    originalPrice: 50,
    description: "Heavy-duty fertilizer bag for bulk requirements",

    colors: [
      {
        name: "green",
        code: "#22C55E",
        image: "/images/green5kgcopys.png",
      },
      {
        name: "blue",
        code: "#3B82F6",
        image: "/images/blue5kgcopys.png",
      },
      {
        name: "orange",
        code: "#F97316",
        image: "/images/orange5kgcopys.png",
      },
    ],

    available: true,
  },
];

export default function ProductSlides() {
  // Store selected color for each product
  const [selectedColors, setSelectedColors] = useState<{
    [key: number]: number;
  }>({
    1: 0, // default green
    2: 0,
    3: 0,
    4: 0,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    slidesToScroll: 3,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleColorChange = (
    productId: number,
    colorIndex: number
  ) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorIndex,
    }));
  };

  return (
    <div className="w-full px-4 md:px-6">
      <div className="relative -mx-4 md:-mx-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6 px-4 md:px-6">
            {products.map((product) => {
              const selectedColorIndex =
                selectedColors[product.id];

              return (
                <div key={product.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                  <Card className="overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full">
              {/* Product Image */}
              {/* Product Image */}
{/* Product Image */}
{/* Product Image */}
{/* Product Image */}
<div className="relative h-[420px] bg-white overflow-hidden">
  {product.colors.map((color, index) => (
    <Image
      key={color.name}
      src={color.image}
      alt={`${product.name} - ${color.name}`}
      fill
      priority
      sizes="(max-width: 768px) 100vw, 33vw"
      className="p-4 transition-opacity duration-300"
      style={{
        objectFit: "contain",
        objectPosition: "center bottom",
        opacity: selectedColorIndex === index ? 1 : 0,
      }}
    />
  ))}
</div>

              {/* Product Details */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {product.size}
                    </p>
                  </div>

                  <span className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-md">
                    In Stock
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-bold text-green-700">
                    ₹{product.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>

                {/* Available Colors */}
                <div className="mb-5">
                  <p className="text-sm font-semibold text-gray-800 mb-3">
                    Available Colors:
                  </p>

                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleColorChange(
                            product.id,
                            index
                          )
                        }
                        className={`w-8 h-8 rounded-full border-4 transition-all duration-200 ${
                          selectedColorIndex === index
                            ? "border-black scale-110"
                            : "border-gray-300"
                        }`}
                        style={{
                          backgroundColor: color.code,
                        }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                  {/* Button */}
                  <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-lg font-medium">
                    View Details
                  </button>
                </div>
              </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
          style={{ left: '-20px' }}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
          style={{ right: '-20px' }}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
