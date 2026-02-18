"use client"

import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import Image from "next/image"
import { Card, CardContent } from "./Ui/card"
import { Button } from "./Ui/button"
import { Badge } from "./Ui/badge"

const carouselItems = [
  {
    id: 1,
    title: "Common Fertilizer Bag",
    subtitle: "40/50kg Bag",
    price: "Rs 32 / pieces",
    image: "/CarousalSlider1.jpg",
    description: "Professional fertilizer packaging with front and back design showcase",
    colors: ["#4CAF50", "#FF9800", "#E91E63"],
    availableColors: 3,
    category: "Large Bags",
  },
  {
    id: 2,
    title: "NPK Readymade Fertilizer Bag",
    subtitle: "25/30kg Bag",
    price: "Rs 28 / pieces",
    image: "/CarousalSlider2.jpg",
    description: "Modern geometric design with blue and yellow color schemes",
    colors: ["#2196F3", "#FFEB3B", "#4CAF50", "#FF9800", "#E91E63"],
    availableColors: 5,
    category: "Medium Bags",
  },
  {
    id: 3,
    title: "5Kg Fertilizer Bags",
    subtitle: "5kg Handle Bag",
    price: "Rs 15 / pieces",
    image: "/CarousalSlider3.jpg",
    description: "Compact bags with convenient handles for easy carrying",
    colors: ["#FF9800", "#394139", "#2196F3"],
    availableColors: 3,
    category: "Small Bags",
  },
  {
    id: 4,
    title: "1Kg Plastic Pouch",
    subtitle: "1kg Pouch",
    price: "Rs 8 / pieces",
    image: "/CarousalSlider4.jpg",
    description: "Versatile small pouches available in multiple vibrant colors",
    colors: ["#E91E63", "#FF9800", "#4CAF50", "#3F51B5", "#00BCD4", "#FFC107", "#424242", "#9C27B0"],
    availableColors: 8,
    category: "Pouches",
  },
  {
    id: 5,
    title: "10Kg Fertilizer Bags",
    subtitle: "10kg Handle Bag",
    price: "Rs 20 / pieces",
    image: "/CarousalSlider5.jpg",
    description: "Medium-sized bags with sturdy handles and clear branding",
    colors: ["#FF9800", "#4CAF50"],
    availableColors: 2,
    category: "Medium Bags",
  },
  {
    id: 6,
    title: "50Kg Fertilizer Bag",
    subtitle: "50kg Bag",
    price: "Rs 40 / pieces",
    image: "/CarousalSlider6.jpg",
    description: "Heavy-duty large bags for bulk fertilizer packaging",
    colors: ["#FFEB3B", "#FF9800", "#4CAF50"],
    availableColors: 3,
    category: "Large Bags",
  },
]

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const currentItem = carouselItems[currentIndex]

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <Card className="overflow-hidden border-1 border-transparent shadow-2xl bg-gradient-to-br from-white to-gray-50 backdrop-blur-md">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 ">
            {/* Image Section */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
              <div className="relative w-full h-full max-w-md">
                <Image
                  src={currentItem.image || "/placeholder.svg"}
                  alt={currentItem.title}
                  height={600}
                  width={300}
                  className="w-full h-full"
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
                onClick={goToPrevious}
              >
                <FaChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg"
                onClick={goToNext}
              >
                <FaChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Content Section */}
            <div className="p-6 lg:pt-10 flex flex-col space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-lg">
                    {currentItem.category}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleAutoPlay}
                    className="text-gray-500 hover:text-orange-600"
                  >
                    {isAutoPlaying ? <FaPause className="h-4 w-4" /> : <FaPlay className="h-4 w-4" />}
                  </Button>
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">{currentItem.title}</h3>
                  <p className="text-xl text-orange-600 font-semibold">{currentItem.subtitle}</p>
                  <p className="text-lg text-gray-700 font-medium mt-5">Price: {currentItem.price}</p>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">{currentItem.description}</p>
              </div>

              {/* Color Options */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Available Colors:</span>
                  <span className="text-sm text-gray-500">{currentItem.availableColors} options</span>
                </div>
                <div className="flex items-center space-x-2">
                  {currentItem.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm"
                      style={{ backgroundColor: color }}
                      title={`Color option ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center space-x-2 pt-4">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-orange-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / carouselItems.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-3 overflow-x-auto p-4">
          {carouselItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-orange-500 shadow-lg scale-105"
                  : "border-gray-300 hover:border-orange-300"
              }`}
            >
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill  />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
