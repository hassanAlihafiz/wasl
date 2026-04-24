"use client";

import { useState, type FormEvent } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { ArrowRight } from "lucide-react";

export default function WaitlistForm({ id }: { id?: string }) {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get("email") ?? "").trim().toLowerCase();
    if (!email) return;

    setSubmitting(true);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error: insertError } = await supabase.from("joinlist_users").insert({ email });

      if (insertError) {
        if (insertError.code === "23505") {
          setDone(true);
          return;
        }
        setError(insertError.message);
        return;
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (  
    <>
      <form id={id} className={`waitlist${done ? " done" : ""}`} onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          aria-label="Email"
          disabled={submitting}
          autoComplete="email"
        />
        <button type="submit" disabled={submitting}>
          {submitting ? "…" : "Join waitlist"}
          {!submitting ? <ArrowRight size={14} aria-hidden /> : null}
        </button>
        <span className="done-msg">✓ You&apos;re on the list — شكراً</span>
      </form>
      {error ? <p className="waitlist-err">{error}</p> : null}
    </>
  );
}
