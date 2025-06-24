"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ForgotPasswordForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    console.log("📧 Password reset requested for:", email);
    setError("");
    onSuccess(); // trigger success modal
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
        error={error}
      />
      <Button type="submit" className="w-full bg-[#7647EE] hover:bg-purple-700">
        Send Reset Link
      </Button>
    </form>
  );
}
