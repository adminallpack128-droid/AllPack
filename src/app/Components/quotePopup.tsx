"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./Ui/button"
import { Input } from "./Ui/input"
import {  Package } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "./Ui/dialog"

interface SimpleQuoteDialogProps {
  children: React.ReactNode
  className?: string
}

export default function QuoteDialog({ children, className }: SimpleQuoteDialogProps) {
  const [mobileNumber, setMobileNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically send the data to your backend
    console.log("Mobile number:", mobileNumber)

    setIsSubmitting(false)
    setMobileNumber("")
    setOpen(false)

    // Show success message
    alert("Thank you! We will contact you shortly.")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className={className}>{children}</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl h-[400px] bg-white p-0 gap-0 rounded-lg overflow-hidden">
        {/* Close Button */}
        {/* <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="h-4 w-4 text-gray-500" />
        </button> */}

        <div className="flex">
          {/* Left Side - Logo */}
          <div className="w-32 bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3">
              <Package className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold text-sm">AllPack Pro</h3>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Connect with <span className="text-orange-600">&quot;AllPack Pro&quot;</span> receive details on your mobile. We’ll respond to you shortly!
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">🇮🇳</span>
                      <span className="text-sm text-gray-600">+91</span>
                    </div>
                  </div>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="pl-16 h-10 border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-md"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">We will contact you on this number</p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || mobileNumber.length !== 10}
                className="w-full h-10 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
