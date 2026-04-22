import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>
          Your dollars,
          <br />
          <em>closer to home.</em>
        </h2>
        <span className="ar">دولاراتك، أقرب إليك.</span>
        <p style={{ marginTop: 32 }}>
          Join the Wasl waitlist. Be among the first to open a USD account when we launch.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}
