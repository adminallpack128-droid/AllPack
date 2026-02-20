"use client";

import type React from "react";

import { Button } from "./Ui/button";
import { FaEnvelope } from "react-icons/fa";
import QuoteDialog from "./quotePopup";

interface QuoteButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline";
  children?: React.ReactNode;
}

export default function QuoteButtonWithDialog({
  className = "",
  size = "default",
  variant = "default",
  children = "Send Email",
}: QuoteButtonProps) {
  return (
    <QuoteDialog className={className}>
      <Button className={className} size={size} variant={variant}>
        <span className="lg:hidden">Email</span>
        <span className="hidden lg:inline">{children}</span>{" "}
        <FaEnvelope className="ml-2 h-4 w-4" />
      </Button>
    </QuoteDialog>
  );
}
