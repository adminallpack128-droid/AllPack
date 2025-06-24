"use client";
import {  Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import { Button } from "./Ui/button";
import QuoteButtonWithPopup from "./getQuotePopup";



export default function Topnav(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
      <header className="sticky top-0 z-50 w-full border-b bg-gray-900/95 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
                 <Link href="/">
              <Image
                src="/AllPackLogo.jpg"
                alt="logo"
                height={100}
                width={100}
                priority
                className="h-full w-full object-cover hover:opacity-75 transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link
                href="#portfolio"
                className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                Services
              </Link>
              <Link href="#about" className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors">
                About
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Desktop Get Quote Button */}
              {/* <Button className="hidden md:flex text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
               <QuoteButtonWithPopup
                className="hidden md:flex text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                size="lg"
              />

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-orange-500"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800">
              <nav className="flex flex-col space-y-4 px-4 py-6 bg-gray-900">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#portfolio"
                  className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="#services"
                  className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <QuoteButtonWithPopup
                className="hidden md:flex text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                size="lg"
              />
              </nav>
            </div>
          )}
        </div>
      </header>
    )
}