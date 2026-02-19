"use client";

import { useState } from "react";
import { Card } from "./Ui/card";
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import { Button } from "./Ui/button";

const products = [
  {
    id: 1,
    name: "10Kg Fertilizer Bags",
    size: "10Kg",
    price: 28,
    originalPrice: 35,
    colors: ["#3B82F6", "#FCD34D", "#10B981", "#F97316", "#EC4899"],
    image: "bg-gradient-to-br from-green-100 via-yellow-50 to-orange-100",
    description: "Modern geometric design with blue and yellow color schemes",
    available: true,
  },
  {
    id: 2,
    name: "NPK Readymade Bags",
    size: "25/30Kg",
    price: 45,
    originalPrice: 55,
    colors: ["#F97316", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899"],
    image: "bg-gradient-to-br from-orange-100 via-red-50 to-pink-100",
    description: "Premium NPK formula bag with vibrant designs",
    available: true,
  },
  {
    id: 3,
    name: "Seed Packets",
    size: "Small/Medium",
    price: 8,
    originalPrice: 10,
    colors: ["#10B981", "#FCD34D", "#F59E0B", "#EC4899", "#3B82F6"],
    image: "bg-gradient-to-br from-yellow-100 via-green-50 to-blue-100",
    description: "Eco-friendly seed packet designs for all crops",
    available: true,
  },
  {
    id: 4,
    name: "Pesticide Containers",
    size: "5L/10L",
    price: 65,
    originalPrice: 80,
    colors: ["#3B82F6", "#06B6D4", "#10B981", "#8B5CF6", "#EC4899"],
    image: "bg-gradient-to-br from-blue-100 via-cyan-50 to-green-100",
    description: "Durable containers with safety markings",
    available: true,
  },
  {
    id: 5,
    name: "Compost Bags",
    size: "50Kg",
    price: 85,
    originalPrice: 100,
    colors: ["#78350F", "#10B981", "#8B5CF6", "#F97316", "#EA580C"],
    image: "bg-gradient-to-br from-amber-100 via-green-50 to-orange-100",
    description: "Heavy-duty compost and manure bags",
    available: true,
  },
  {
    id: 6,
    name: "Bio-Fertilizer Bags",
    size: "1Kg",
    price: 15,
    originalPrice: 18,
    colors: ["#10B981", "#059669", "#047857", "#F59E0B", "#FBBF24"],
    image: "bg-gradient-to-br from-green-100 via-lime-50 to-yellow-100",
    description: "Organic bio-fertilizer eco-friendly packaging",
    available: true,
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setHoveredProduct] = useState<number | null>(null);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getVisibleProducts = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(products[(currentIndex + i) % products.length]);
    }
    return items;
  };

  return (
    <div className="w-full">
      <div className="relative">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"> 
          {getVisibleProducts().map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className={`h-56 ${product.image} rounded-t-2xl`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button className="absolute top-3 right-3 p-2 rounded-full bg-background/80 hover:bg-background text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaHeart className="w-5 h-5" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {product.size}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-md">
                    In Stock
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-green-700">
                    ₹{product.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>

                  <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-md ml-auto">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100,
                    )}
                    % OFF
                  </span>
                </div>

                {/* Available Colors */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    Available Colors:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-5 h-5 rounded-full border border-gray-300
 hover:border-primary cursor-pointer transition-colors"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 shadow-md transition-all z-10 hidden lg:flex items-center justify-center"
          aria-label="Previous products"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute -right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 shadow-md transition-all z-10 hidden lg:flex items-center justify-center"
          aria-label="Next products"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex gap-3 justify-center mt-6 lg:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={prev}
          className="border-orange-500 text-orange-500 hover:bg-orange-100"
        >
          <FaChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={next}
          className="border-orange-500 text-orange-500 hover:bg-orange-100"
        >
          Next
          <FaChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx >= currentIndex && idx < currentIndex + 3
                ? "bg-orange-500 w-6"
                : "bg-gray-300 w-2 hover:bg-orange-500/50"
            }`}
            aria-label={`Go to product ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// "use client"

// import { useState, useEffect } from "react"
// import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
// import Image from "next/image"
// import { Card, CardContent } from "./Ui/card"
// import { Button } from "./Ui/button"
// import { Badge } from "./Ui/badge"

// const carouselItems = [
//   {
//     id: 1,
//     title: "Common Fertilizer Bag",
//     subtitle: "40/50kg Bag",
//     price: "Rs 32 / pieces",
//     image: "/CarousalSlider1.jpg",
//     description: "Professional fertilizer packaging with front and back design showcase",
//     colors: ["#4CAF50", "#FF9800", "#E91E63"],
//     availableColors: 3,
//     category: "Large Bags",
//   },
//   {
//     id: 2,
//     title: "NPK Readymade Fertilizer Bag",
//     subtitle: "25/30kg Bag",
//     price: "Rs 28 / pieces",
//     image: "/CarousalSlider2.jpg",
//     description: "Modern geometric design with blue and yellow color schemes",
//     colors: ["#2196F3", "#FFEB3B", "#4CAF50", "#FF9800", "#E91E63"],
//     availableColors: 5,
//     category: "Medium Bags",
//   },
//   {
//     id: 3,
//     title: "5Kg Fertilizer Bags",
//     subtitle: "5kg Handle Bag",
//     price: "Rs 15 / pieces",
//     image: "/CarousalSlider3.jpg",
//     description: "Compact bags with convenient handles for easy carrying",
//     colors: ["#FF9800", "#394139", "#2196F3"],
//     availableColors: 3,
//     category: "Small Bags",
//   },
//   {
//     id: 4,
//     title: "1Kg Plastic Pouch",
//     subtitle: "1kg Pouch",
//     price: "Rs 8 / pieces",
//     image: "/CarousalSlider4.jpg",
//     description: "Versatile small pouches available in multiple vibrant colors",
//     colors: ["#E91E63", "#FF9800", "#4CAF50", "#3F51B5", "#00BCD4", "#FFC107", "#424242", "#9C27B0"],
//     availableColors: 8,
//     category: "Pouches",
//   },
//   {
//     id: 5,
//     title: "10Kg Fertilizer Bags",
//     subtitle: "10kg Handle Bag",
//     price: "Rs 20 / pieces",
//     image: "/CarousalSlider5.jpg",
//     description: "Medium-sized bags with sturdy handles and clear branding",
//     colors: ["#FF9800", "#4CAF50"],
//     availableColors: 2,
//     category: "Medium Bags",
//   },
//   {
//     id: 6,
//     title: "50Kg Fertilizer Bag",
//     subtitle: "50kg Bag",
//     price: "Rs 40 / pieces",
//     image: "/CarousalSlider6.jpg",
//     description: "Heavy-duty large bags for bulk fertilizer packaging",
//     colors: ["#FFEB3B", "#FF9800", "#4CAF50"],
//     availableColors: 3,
//     category: "Large Bags",
//   },
// ]

// export default function PortfolioCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
//     }, 4000)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
//   }

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
//   }

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index)
//   }

//   const toggleAutoPlay = () => {
//     setIsAutoPlaying(!isAutoPlaying)
//   }

//   const currentItem = carouselItems[currentIndex]

//   return (
//     <div className="relative w-full">
//       {/* Main Carousel */}
//       <Card className="overflow-hidden border-1 border-transparent shadow-2xl bg-gradient-to-br from-white to-gray-50 backdrop-blur-md">
//         <CardContent className="p-0">
//           <div className="grid lg:grid-cols-2 ">
//             {/* Image Section */}
//             <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
//               <div className="relative w-full h-full max-w-md">
//                 <Image
//                   src={currentItem.image || "/placeholder.svg"}
//                   alt={currentItem.title}
//                   height={600}
//                   width={300}
//                   className="w-full h-full"
//                   priority
//                 />
//               </div>

//               {/* Navigation Arrows */}
//               <Button
//                 variant="secondary"
//                 size="icon"
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
//                 onClick={goToPrevious}
//               >
//                 <FaChevronLeft className="h-5 w-5" />
//               </Button>
//               <Button
//                 variant="secondary"
//                 size="icon"
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
//                 onClick={goToNext}
//               >
//                 <FaChevronRight className="h-5 w-5" />
//               </Button>
//             </div>

//             {/* Content Section */}
//             <div className="p-6 lg:pt-10 flex flex-col space-y-6">
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-lg">
//                     {currentItem.category}
//                   </Badge>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={toggleAutoPlay}
//                     className="text-gray-500 hover:text-orange-600"
//                   >
//                     {isAutoPlaying ? <FaPause className="h-4 w-4" /> : <FaPlay className="h-4 w-4" />}
//                   </Button>
//                 </div>

//                 <div>
//                   <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">{currentItem.title}</h3>
//                   <p className="text-xl text-orange-600 font-semibold">{currentItem.subtitle}</p>
//                   <p className="text-lg text-gray-700 font-medium mt-5">Price: {currentItem.price}</p>
//                 </div>

//                 <p className="text-lg text-gray-600 leading-relaxed">{currentItem.description}</p>
//               </div>

//               {/* Color Options */}
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-gray-700">Available Colors:</span>
//                   <span className="text-sm text-gray-500">{currentItem.availableColors} options</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   {currentItem.colors.map((color, index) => (
//                     <div
//                       key={index}
//                       className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm"
//                       style={{ backgroundColor: color }}
//                       title={`Color option ${index + 1}`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Slide Indicators */}
//               <div className="flex items-center space-x-2 pt-4">
//                 {carouselItems.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400"
//                     }`}
//                   />
//                 ))}
//               </div>

//               {/* Progress Bar */}
//               <div className="w-full bg-gray-200 rounded-full h-1">
//                 <div
//                   className="bg-orange-500 h-1 rounded-full transition-all duration-300"
//                   style={{ width: `${((currentIndex + 1) / carouselItems.length) * 100}%` }}
//                 />
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Thumbnail Navigation */}
//       <div className="mt-6 flex justify-center">
//         <div className="flex space-x-3 overflow-x-auto p-4">
//           {carouselItems.map((item, index) => (
//             <button
//               key={item.id}
//               onClick={() => goToSlide(index)}
//               className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                 index === currentIndex
//                   ? "border-orange-500 shadow-lg scale-105"
//                   : "border-gray-300 hover:border-orange-300"
//               }`}
//             >
//               <Image src={item.image || "/placeholder.svg"} alt={item.title} fill  />
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
