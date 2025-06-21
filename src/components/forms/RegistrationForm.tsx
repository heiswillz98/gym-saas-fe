"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  onSuccess: () => void;
}

export function RegisterationForm({ onSuccess }: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gymName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validatePassword = (password: string): string[] => {
    const rules = [
      { test: (s: string) => s.length >= 8, message: "At least 8 characters" },
      {
        test: (s: string) => /[A-Z]/.test(s) && /[a-z]/.test(s),
        message: "At least 1 lowercase and 1 uppercase letter",
      },
      {
        test: (s: string) => /\d/.test(s),
        message: "Mix of letters and numbers",
      },
      {
        test: (s: string) => /[!@#$%^&*(),.?":{}|<>]/.test(s),
        message: "At least 1 special character",
      },
    ];
    return rules.filter((rule) => !rule.test(password)).map((r) => r.message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    Object.entries(form).forEach(([key, val]) => {
      if (!val.trim()) newErrors[key] = `${key} is required`;
    });

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    const passwordErrors = validatePassword(form.password);
    if (passwordErrors.length > 0)
      newErrors.password = "Password does not meet all requirements";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("✅ Registration submitted:", form);
    setErrors({});
    onSuccess(); // trigger parent to show success modal
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          label="First Name"
          name="firstName"
          placeholder="Enter first name"
          value={form.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          name="lastName"
          placeholder="Enter last name"
          value={form.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
      </div>
      <Input
        label="Gym Name/Wellness Center Name"
        name="gymName"
        placeholder="Enter gym name"
        value={form.gymName}
        onChange={handleChange}
        error={errors.gymName}
      />
      <Input
        label="Email"
        name="email"
        placeholder="Enter email address"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Phone Number"
        name="phone"
        placeholder="Enter phone number"
        value={form.phone}
        onChange={handleChange}
        error={errors.phone}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Create password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />
      <ul className="text-sm text-gray-600 mb-2 space-y-1 pl-2">
        <li>• At least 8 characters</li>
        <li>• Mix of letters and numbers</li>
        <li>• At least 1 special character</li>
        <li>• At least 1 lowercase and 1 uppercase letter</li>
      </ul>
      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={form.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />
      <Button
        type="submit"
        className="w-full h-12 bg-[#7647EE] hover:bg-purple-700"
      >
        Submit
      </Button>
    </form>
  );
}
