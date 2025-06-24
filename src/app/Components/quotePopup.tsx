"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./Ui/button"
import { Input } from "./Ui/input"
    import { Package } from "lucide-react"
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./Ui/dialog"

interface QuoteDialogProps {
  children: React.ReactNode
  className?: string
}

export default function QuoteDialog({ children, className }: QuoteDialogProps) {
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

    // Show success message (you can implement toast notification)
    alert("Thank you! We will contact you shortly.")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className={className}>{children}</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader className="space-y-6">
          {/* Logo and Header */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Package className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AllPack Pro</h3>
              <p className="text-sm text-gray-600">Packaging Solutions</p>
            </div>
          </div>

          <DialogTitle className="text-xl font-bold text-gray-900 text-left">
            Connect with &quot;AllPack Pro&quot; and get details on your mobile quickly
          </DialogTitle>
        </DialogHeader>

        {/* Form */}
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
                className="pl-16 h-12 border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
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
            className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
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

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-xs text-gray-500">By submitting, you agree to receive calls/messages from AllPack Pro</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
