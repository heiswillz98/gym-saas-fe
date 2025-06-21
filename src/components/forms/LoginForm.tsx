"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginForm({
  onForgotPassword,
}: {
  onForgotPassword: () => void;
}) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("🔐 Login Submitted", form);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />

      <div className="text-right">
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-[#7647EE] hover:bg-purple-700"
      >
        Login
      </Button>
    </form>
  );
}
