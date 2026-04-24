"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "./BrandMark";
import { useWaitlistModal } from "@/lib/useWaitlistModal";

export default function Nav() {
  const { openModal } = useWaitlistModal();
  const pathname = usePathname();
  const isInnerPage = pathname !== "/";

  return (
    <nav className={`nav${isInnerPage ? " nav-dark" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <BrandMark height={42} />
        </Link>
        <div className="nav-links">
          <a href="/#how">How it works</a>
          <a href="/#platforms">Platforms</a>
          <a href="/#features">Account</a>
          <a href="/#waitlist">Waitlist</a>
        </div>
        <button type="button" className="btn btn-primary" onClick={openModal}>
          Join waitlist <ArrowRight size={12} className=" h-2" />
        </button>
      </div>
    </nav>
  );
}
