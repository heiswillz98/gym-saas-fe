"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export function SuccessModal({ open, message, onClose }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-6 text-center sm:max-w-sm w-full">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-green-600">
            Success
          </DialogTitle>
        </DialogHeader>
        <p className="mt-2 text-gray-700">{message}</p>
        <Button
          className="bg-[#7647EE] hover:bg-purple-700 mt-4 w-full"
          onClick={onClose}
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}
