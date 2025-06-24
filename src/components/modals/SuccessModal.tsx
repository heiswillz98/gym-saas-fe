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
  title: string;
  onClose: () => void;
}

export function SuccessModal({
  open,
  message,
  onClose,
  title,
}: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-6 text-center sm:max-w-sm w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>
        <p className="mt-2 text-[#7F8287]">{message}</p>
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
