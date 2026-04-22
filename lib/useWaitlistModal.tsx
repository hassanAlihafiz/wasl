"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

interface WaitlistCtx {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Ctx = createContext<WaitlistCtx | null>(null);

export function WaitlistModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return <Ctx.Provider value={{ open, openModal, closeModal }}>{children}</Ctx.Provider>;
}

export function useWaitlistModal(): WaitlistCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWaitlistModal must be used inside <WaitlistModalProvider>");
  return ctx;
}
