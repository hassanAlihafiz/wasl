"use client";

import { ArrowRight } from "lucide-react";
import BrandMark from "./BrandMark";
import { useWaitlistModal } from "@/lib/useWaitlistModal";

export default function Nav() {
  const { openModal } = useWaitlistModal();
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand">
          <BrandMark height={42} />
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#platforms">Platforms</a>
          <a href="#features">Account</a>
          <a href="#waitlist">Waitlist</a>
        </div>
        <button type="button" className="btn btn-primary" onClick={openModal}>
          Join waitlist <ArrowRight size={12} className=" h-2" />
        </button>
      </div>
    </nav>
  );
}
