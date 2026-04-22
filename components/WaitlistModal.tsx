"use client";

import { useWaitlistModal } from "@/lib/useWaitlistModal";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistModal() {
  const { open, closeModal } = useWaitlistModal();
  return (
    <div
      id="waitlist-modal"
      className={`modal-backdrop${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="wl-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={closeModal}
          aria-label="Close"
        >
          ×
        </button>
        <div className="modal-mark">و</div>
        <h3 id="wl-title">
          Join the <em>waitlist.</em>
        </h3>
        <p className="modal-sub">
          Be among the first to open a Wasl USD account when we launch. We&apos;ll email you the
          moment early access opens.
        </p>
        <WaitlistForm />
        <ul className="modal-perks">
          <li>Early access before public launch</li>
          <li>Waive the first-month fees at launch</li>
          <li>No spam. Unsubscribe anytime.</li>
        </ul>
        <div className="ar">كن من أوائل المسجلين.</div>
      </div>
    </div>
  );
}
