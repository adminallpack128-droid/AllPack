"use client"

import type React from "react"

import { Button } from "./Ui/button"
import { ArrowRight } from "lucide-react"
import QuoteDialog from "./quotePopup"

interface QuoteButtonProps {
  className?: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline"
  children?: React.ReactNode
}

export default function QuoteButtonWithDialog({
  className = "",
  size = "default",
  variant = "default",
  children = "Get Quote",
}: QuoteButtonProps) {
  return (
    <QuoteDialog className={className}>
      <Button className={className} size={size} variant={variant}>
        {children}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </QuoteDialog>
  )
}
