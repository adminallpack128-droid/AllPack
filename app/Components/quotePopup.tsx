"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "./Ui/button";
import { Input } from "./Ui/input";
import { Dialog, DialogContent, DialogTrigger } from "./Ui/dialog";
// import { Resend } from "resend"
import Image from "next/image";
import Link from "next/link";

interface SimpleQuoteDialogProps {
  children: React.ReactNode;
  className?: string;
}

export default function QuoteDialog({
  children,
  className,
}: SimpleQuoteDialogProps) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    // const resend = new Resend(process.env.EMAIL_PASS);
    
    try {
      // Transform data for API
      const apiData = {
        firstName: "Quote Request",
        lastName: "",
        // email: "quote-request@allpack.com", // Placeholder email
        company: "",
        projectDetails: `Quote Request via Mobile:
Phone Number: +91 ${mobileNumber}
Request Type: Quick Quote Request
Submitted: ${new Date().toLocaleString()}

Customer requested a quote and provided their mobile number for quick contact.`,
        submittedAt: new Date().toISOString(),
      };

      console.log("API data being sent:", apiData);

      const response = await fetch("/api/emailcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Response data:", result);

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setMobileNumber("");

        // Close dialog after 2 seconds
        setTimeout(() => {
          setOpen(false);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        console.error("API Error:", result);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className={className}>{children}</div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl h-[400px] bg-white p-0 gap-0 rounded-lg overflow-hidden">
        <div className="flex">
          {/* Left Side - Logo */}
          <div className="w-32 bg-gradient-to-br from-orange-500 to-orange-600 flex flex-col items-center justify-center">
            {/* <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3">
              <FaBox className="h-8 w-8 text-orange-600" />
            </div> */}
            <Link href="/">
                    <Image
                      src="/AllPackLogo.jpg"
                      alt="logo"
                      height={200}
                      width={200}
                      priority
                      className="h-full w-full object-cover hover:opacity-75 transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    />
                  </Link>
           
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Connect with{" "}
                <span className="text-orange-600">&quot;Allpack&quot;</span>{" "}
                receive details on your mobile. We&apos;ll respond to you
                shortly!
              </h2>
            </div>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                <div className="flex items-center">
                  <span className="mr-2">✅</span>
                  <div>
                    <strong>Success!</strong> We&apos;ll contact you shortly on
                    +91 {mobileNumber}
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                <div className="flex items-center">
                  <span className="mr-2">❌</span>
                  <div>
                    <strong>Error!</strong> Failed to submit request. Please try
                    again.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
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
                    disabled={submitStatus === "success"}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  We will contact you on this number
                </p>
              </div>

              <Button
                type="submit"
                disabled={
                  isSubmitting ||
                  mobileNumber.length !== 10 ||
                  submitStatus === "success"
                }
                className="w-full h-10 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : submitStatus === "success" ? (
                  "Request Submitted ✓"
                ) : (
                  "Submit"
                )}
              </Button>
            </form>

            {/* Additional Info */}
            {submitStatus !== "success" && (
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  By submitting, you agree to receive calls/messages from
                  Allpack 
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
