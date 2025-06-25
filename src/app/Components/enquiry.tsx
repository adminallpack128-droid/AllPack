"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./Ui/button"
import { Textarea } from "./Ui/textarea"
import { Input } from "./Ui/input"
import { Send, Package, Phone, Mail } from "lucide-react"

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  

  const handleSubmit = async () => {
    // e.preventDefault()
    // setIsSubmitting(true)
    console.log("formData", formData)
    try {
      // This would typically call your email service API
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
console.log("sdfs",response)
      if (response.ok) {
        alert("Thank you! Your inquiry has been submitted successfully. We'll get back to you soon.")
        resetForm();
      } else {
       alert("Error While submitting Form.")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Error While submitting Form.")
    } finally {
      setIsSubmitting(false);
    }
    // Show success message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

   const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      requirement: "",
    })
    setTimeout(() => 3000)
  }
  return (
    <section className="relative py-5 bg-gradient-to-br from-orange-50 via-orange-25 to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-orange-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-orange-500 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-amber-400 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 border-2 border-orange-400 rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-[5rem] relative">
        <div className="max-w-3/4 mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Tell Us What Are You Looking For?</h2>
                <p className="text-gray-700 text-lg">Get custom packaging solutions tailored to your business needs</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className=" bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info Row */}
              <div className="grid md:grid-cols-3 gap-4 text-lg">
                <div>
                  <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-white/30 focus:border-orange-500 focus:ring-orange-500 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-white/30 focus:border-orange-500 focus:ring-orange-500 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-white/30 focus:border-orange-500 focus:ring-orange-500 text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Requirement Textarea */}
              <div>
                <label htmlFor="requirement" className="block text-gray-800 font-medium mb-2 text-lg">
                  Describe Your Requirement *
                </label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  placeholder="Kindly describe your packaging requirements in detail - product type, quantity, size, design preferences, etc."
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/90 border-white/30 focus:border-orange-500 focus:ring-orange-500 text-gray-900 placeholder-gray-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-12 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Enquiry...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Send Enquiry</span>
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg">Call Us Directly</h3>
                  <p className="text-gray-700">+91 89750 40173</p>
                  <p className="text-gray-600 text-sm">68% Response Rate</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg">Email Us</h3>
                  <p className="text-gray-700">illusiondesign128@gmail.com</p>
                  <p className="text-gray-600 text-sm">Quick Response Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
