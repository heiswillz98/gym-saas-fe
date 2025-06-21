"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthModals } from "@/components/modals/AuthModals";
import { SuccessModal } from "@/components/modals/SuccessModal";

export default function Home() {
  const [openModal, setOpenModal] = useState<
    "register" | "login" | "forgot" | "success" | "forgot-success" | null
  >(null);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4 gap-4">
      <Button
        onClick={() => setOpenModal("register")}
        className="bg-[#7647EE] hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-full shadow-lg"
      >
        Register
      </Button>
      <Button
        onClick={() => setOpenModal("login")}
        className="bg-gray-800 hover:bg-gray-700 text-white text-lg px-6 py-3 rounded-full shadow-lg"
      >
        Login
      </Button>

      <AuthModals
        modal={
          openModal === "register" ||
          openModal === "login" ||
          openModal === "forgot"
            ? openModal
            : null
        }
        onClose={() => setOpenModal(null)}
        onForgotPassword={() => setOpenModal("forgot")}
        onSuccess={(type) => {
          setOpenModal(null);
          setTimeout(
            () =>
              setOpenModal(type === "register" ? "success" : "forgot-success"),
            300
          );
        }}
      />

      <SuccessModal
        open={openModal === "success"}
        message="Registration successful. We’ll get back to you shortly!"
        onClose={() => setOpenModal(null)}
      />
      <SuccessModal
        open={openModal === "forgot-success"}
        message="A password reset link has been sent to your email."
        onClose={() => setOpenModal(null)}
      />
    </main>
  );
}
