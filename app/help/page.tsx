"use client";
import { Rocket , CreditCard , Link , ShieldBan, DollarSign } from "lucide-react";
import { useState } from "react";

const categories = [
    { icon: <Rocket />, title: "Getting started", desc: "Account setup, verification, and your first payment", count: "8 articles" },
    { icon: <CreditCard />, title: "Your USD account", desc: "Routing numbers, account details, and balances", count: "12 articles" },
    { icon: <Link />, title: "Platform integrations", desc: "Upwork, Deel, Fiverr, Toptal, and direct wire", count: "10 articles" },
    { icon: <img src="/icons/currency-exchange.svg" alt="currency exchange" />, title: "Fees & conversion", desc: "How our pricing works and FX rates explained", count: "6 articles" },
    { icon: <ShieldBan />, title: "Security & identity", desc: "KYC, verification, and keeping your account safe", count: "9 articles" },
    { icon: <DollarSign />, title: "Spending & card", desc: "Using your Wasl card virtually and physically", count: "7 articles" },
];

const faqGroups = [
    {
        title: "Getting started",
        items: [
            { q: "What is Wasl and how is it different from a wallet like Wise or PayPal?", a: "Wasl gives you a real USD bank account — with a proper routing number and account number — not a digital wallet. This means any employer, client, or platform can pay you exactly like they'd pay a US-based contractor. No intermediaries, no currency conversion surprises at the point of receipt." },
            { q: "Which countries is Wasl available in?", a: "Wasl is built first for the Arab world — Egypt, UAE, Saudi Arabia, Jordan, Morocco, Pakistan, and more. We're expanding rapidly. Join the waitlist and we'll notify you when your country is supported at launch." },
            { q: "How long does verification take?", a: "Most users are verified in under 6 minutes. You'll need a government-issued ID and a selfie. In rare cases where additional review is needed, it can take up to 24 hours." },
            { q: "Do I need a US address or SSN to open an account?", a: "No. You don't need a US address, Social Security Number, or any US-based documentation. All you need is a valid national ID from a supported country." },
        ],
    },
    {
        title: "Fees & pricing",
        items: [
            { q: "How much does it cost to receive a payment?", a: "$0. Receiving USD payments via ACH, wire, or platform payout is completely free. We never charge you to receive money." },
            { q: "What's the fee to convert USD to my local currency?", a: "We charge a flat 0.4% on currency conversions — applied to the mid-market rate (the real exchange rate, not a marked-up bank rate). We show you the exact rate, the spread, and our fee before you confirm. No hidden markups." },
            { q: "Are there monthly fees or minimums?", a: "No monthly fees. No minimum balance. No inactivity fees. You only pay when you convert currency — and even then, it's just 0.4%." },
        ],
    },
    {
        title: "Platforms & integrations",
        items: [
            { q: "How do I connect my Upwork account to Wasl?", a: "Once your Wasl account is open, go to Platforms → Add Upwork. Enter your Wasl routing and account number in Upwork's payment settings — exactly like you'd add a US bank account. Payouts will flow directly into Wasl from your next billing cycle." },
            { q: "Does Wasl work with Deel, Fiverr, and Toptal?", a: "Yes. Wasl works with any platform that supports ACH or wire transfers to a US bank account — including Deel (EOR and contractor), Fiverr, Toptal, and direct wire from any employer." },
        ],
    },
    {
        title: "Launch & availability",
        items: [
            { q: "When is Wasl launching?", a: "We're targeting a public launch in Q3 2026. Waitlist members get early access weeks before the public launch — often with first-month fee waivers and priority support." },
            { q: "I joined the waitlist. What happens next?", a: "You'll receive a confirmation email immediately. When early access opens, you'll get a personal invite link — you won't need to wait in a general queue. We'll never spam you." },
        ],
    },
];

const contacts = [
    { title: "Email support", desc: "We respond to all emails within 24 hours, in both Arabic and English.", link: "support@getwasl.com", href: "mailto:support@getwasl.com" },
    { title: "WhatsApp", desc: "Chat with our team directly. Available Sunday–Thursday, 9am–6pm GST.", link: "Open WhatsApp →", href: "#" },
    { title: "Community", desc: "Join 2,000+ freelancers on our Discord. Share tips, ask questions, get answers.", link: "Join Discord →", href: "#" },
];

export default function HelpPage() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggle = (key: string) => {
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <main>

            {/* Hero */}
            <section style={{ background: "#0D0D0D", padding: "6rem 5vw 4rem", textAlign: "center" }}>
                <h1 style={{ fontFamily: "serif", fontSize: "clamp(2.2rem,5vw,3.8rem)", color: "white", marginBottom: "1rem" }}>
                    How can we <em style={{ color: "#C9A84C", fontStyle: "italic" }}>help you?</em>
                </h1>
                <p style={{ color: "#aaa", fontSize: "1.05rem", fontWeight: 300, marginBottom: "2rem" }}>
                    Search our knowledge base or browse topics below.
                </p>
                <div style={{ display: "flex", maxWidth: 560, margin: "0 auto", background: "white", overflow: "hidden" }}>
                    <input
                        type="text"
                        placeholder="Search — e.g. 'how do I connect Upwork?'"
                        style={{ flex: 1, padding: "1rem 1.5rem", border: "none", fontFamily: "inherit", fontSize: "1rem", outline: "none", background: "white", color: "#0D0D0D" }}
                    />
                    <button style={{ background: "#C9A84C", border: "none", padding: "1rem 1.5rem", cursor: "pointer", fontWeight: 500, fontSize: "0.9rem", color: "#0D0D0D", fontFamily: "inherit" }}>
                        Search →
                    </button>
                </div>
            </section>

            {/* Categories + FAQ */}
            <section style={{ padding: "5rem 5vw" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    Browse by topic
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 1, background: "#E8E2D0", marginBottom: "5rem" }}>
                    {categories.map((c) => (
                        <div key={c.title} style={{ background: "#FAF7EF", padding: "2rem 1.75rem", cursor: "pointer", borderBottom: "3px solid transparent", transition: "all 0.2s" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "white"; (e.currentTarget as HTMLDivElement).style.borderBottomColor = "#C9A84C"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#FAF7EF"; (e.currentTarget as HTMLDivElement).style.borderBottomColor = "transparent"; }}
                        >
                            <span style={{ fontSize: "1.8rem", marginBottom: "1rem", display: "block" }}>{c.icon}</span>
                            <h3 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.4rem" }}>{c.title}</h3>
                            <p style={{ fontSize: "0.83rem", color: "#6B6B6B" }}>{c.desc}</p>
                            <div style={{ fontSize: "0.75rem", color: "#C9A84C", marginTop: "0.75rem", letterSpacing: "0.06em" }}>{c.count}</div>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    Frequently asked questions
                </p>
                <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", lineHeight: 1.15, marginBottom: "2.5rem" }}>
                    The answers people <em style={{ color: "#C9A84C", fontStyle: "italic" }}>ask most.</em>
                </h2>

                <div>
                    {faqGroups.map((group) => (
                        <div key={group.title} style={{ marginBottom: "3rem" }}>
                            <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem", paddingBottom: "0.75rem", borderBottom: "1px solid #E8E2D0" }}>
                                {group.title}
                            </div>
                            {group.items.map((item, i) => {
                                const key = `${group.title}-${i}`;
                                const isOpen = openItems[key];
                                return (
                                    <div key={key} style={{ borderBottom: "1px solid #E8E2D0" }}>
                                        <div
                                            onClick={() => toggle(key)}
                                            style={{ padding: "1.25rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontSize: "0.97rem", fontWeight: 500, color: isOpen ? "#C9A84C" : "#0D0D0D" }}
                                        >
                                            {item.q}
                                            <span style={{ fontSize: "1.2rem", color: "#C9A84C", fontWeight: 300, flexShrink: 0, marginLeft: "1rem", transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s", display: "inline-block" }}>+</span>
                                        </div>
                                        {isOpen && (
                                            <div style={{ paddingBottom: "1.25rem", fontSize: "0.9rem", color: "#6B6B6B", lineHeight: 1.8 }}>
                                                {item.a}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section style={{ background: "#0D0D0D", color: "white", padding: "5rem 5vw" }}>
                <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>
                    Still have questions?
                </p>
                <h2 style={{ fontFamily: "serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "white", marginBottom: 0 }}>
                    We're here to <em style={{ color: "#C9A84C", fontStyle: "italic" }}>help.</em>
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 1, background: "#333", marginTop: "3rem" }}>
                    {contacts.map((c) => (
                        <div key={c.title} style={{ background: "#0D0D0D", padding: "2.5rem 2rem", borderBottom: "2px solid transparent", transition: "border-color 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.borderBottomColor = "#C9A84C"}
                            onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.borderBottomColor = "transparent"}
                        >
                            <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "white", marginBottom: "0.5rem" }}>{c.title}</h3>
                            <p style={{ fontSize: "0.87rem", color: "#888", marginBottom: "1.25rem" }}>{c.desc}</p>
                            <a href={c.href} style={{ color: "#C9A84C", fontSize: "0.87rem", letterSpacing: "0.04em" }}>{c.link}</a>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}