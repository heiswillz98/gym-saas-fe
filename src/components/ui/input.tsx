"use client";

import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-800">{label}</label>
      <input
        {...props}
        className={cn(
          "w-full p-2 rounded border",
          "border-[0.7px] border-[#76787C] bg-[#F3F3F3]",
          "placeholder:text-[#7F8287]",
          "font-uber-move",
          error && "border-red-500",
          className
        )}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
