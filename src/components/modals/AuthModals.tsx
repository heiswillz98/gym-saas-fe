"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RegisterationForm } from "@/components/forms/RegistrationForm";
import { LoginForm } from "@/components/forms/LoginForm";
import { ForgotPasswordForm } from "@/components/forms/ForgotPasswordForm";

interface Props {
  modal: "register" | "login" | "forgot" | null;
  onClose: () => void;
  onSuccess: (type: "register" | "forgot") => void;
  onForgotPassword: () => void;
}

export function AuthModals({
  modal,
  onClose,
  onSuccess,
  onForgotPassword,
}: Props) {
  return (
    <>
      {/* Register */}
      <Dialog open={modal === "register"} onOpenChange={onClose}>
        <DialogContent className="max-h-[90vh] overflow-y-auto p-6 sm:rounded-lg w-full sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-bold">Welcome</DialogTitle>
          </DialogHeader>
          <RegisterationForm onSuccess={() => onSuccess("register")} />
        </DialogContent>
      </Dialog>

      {/* Login */}
      <Dialog open={modal === "login"} onOpenChange={onClose}>
        <DialogContent className="max-h-[90vh] overflow-y-auto p-6 sm:rounded-lg w-full sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-bold">
              Welcome Back
            </DialogTitle>
          </DialogHeader>
          <LoginForm onForgotPassword={onForgotPassword} />
        </DialogContent>
      </Dialog>

      {/* Forgot Password */}
      <Dialog open={modal === "forgot"} onOpenChange={onClose}>
        <DialogContent className="max-h-[90vh] overflow-y-auto p-6 sm:rounded-lg w-full sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reset Password</DialogTitle>
          </DialogHeader>
          <ForgotPasswordForm onSuccess={() => onSuccess("forgot")} />
        </DialogContent>
      </Dialog>
    </>
  );
}
