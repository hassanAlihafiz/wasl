"use client";
import { useState } from "react";

type TabId = "terms" | "privacy" | "aml" | "cookies";

const tabs: { id: TabId; label: string }[] = [
    { id: "terms", label: "Terms of Service" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "aml", label: "AML Policy" },
    { id: "cookies", label: "Cookies" },
];

const navLinks: { label: string; tab: TabId }[] = [
    { label: "Terms of Service", tab: "terms" },
    { label: "Privacy Policy", tab: "privacy" },
    { label: "AML Policy", tab: "aml" },
    { label: "Cookie Policy", tab: "cookies" },
];

const PlainLanguage = ({ children }: { children: React.ReactNode }) => (
    <div style={{ background: "#FFF8E7", borderLeft: "3px solid #C9A84C", padding: "1rem 1.25rem", marginBottom: "1rem", fontSize: "0.87rem", color: "#7A5C00" }}>
        <strong style={{ display: "block", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: "0.35rem", color: "#8B6914" }}>Plain language</strong>
        {children}
    </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.75rem", paddingTop: "1.5rem", borderTop: "1px solid #E8E2D0" }}>{children}</h3>
);

const DocMeta = ({ children }: { children: React.ReactNode }) => (
    <div style={{ fontSize: "0.8rem", color: "#6B6B6B", marginBottom: "2.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid #E8E2D0" }}>{children}</div>
);

const P = ({ children }: { children: React.ReactNode }) => (
    <p style={{ fontSize: "0.9rem", color: "#444", marginBottom: "0.75rem" }}>{children}</p>
);

const UL = ({ items }: { items: string[] }) => (
    <ul style={{ paddingLeft: "1.5rem", fontSize: "0.9rem", color: "#444" }}>
        {items.map((item, i) => <li key={i} style={{ marginBottom: "0.4rem" }}>{item}</li>)}
    </ul>
);

export default function LegalPage() {
    const [activeTab, setActiveTab] = useState<TabId>("terms");

    return (
        <main>

            {/* Hero */}
            <section style={{ background: "#0D0D0D", color: "white", padding: "6rem 5vw 4rem" }}>
                <p style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1.5rem" }}>
                    Legal
                </p>
                <h1 style={{ fontFamily: "serif", fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 1.1, maxWidth: 640, marginBottom: "1rem" }}>
                    Legal documents, written in <em style={{ color: "#C9A84C", fontStyle: "italic" }}>plain language.</em>
                </h1>
                <p style={{ color: "#aaa", fontSize: "1rem", maxWidth: 520, fontWeight: 300 }}>
                    We've made every effort to write our legal documents so they're actually understandable. You'll find plain-language summaries throughout.
                </p>
            </section>

            {/* Layout */}
            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "5rem", padding: "5rem 5vw", maxWidth: 1100, margin: "0 auto" }}>

                {/* Sidebar nav */}
                <div style={{ position: "sticky", top: 100, alignSelf: "start" }}>
                    <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "1rem" }}>Documents</p>
                    {navLinks.map((n) => (
                        <button key={n.tab} onClick={() => setActiveTab(n.tab)}
                            style={{ display: "block", width: "100%", textAlign: "left", padding: "0.5rem 0", fontSize: "0.87rem", color: activeTab === n.tab ? "#C9A84C" : "#6B6B6B", borderBottom: "1px solid #E8E2D0", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: activeTab === n.tab ? 500 : 400 }}>
                            {n.label}
                        </button>
                    ))}
                    <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A84C", marginTop: "2rem", marginBottom: "0.5rem" }}>Questions?</p>
                    <a href="mailto:legal@getwasl.com" style={{ color: "#C9A84C", fontSize: "0.87rem" }}>legal@getwasl.com</a>
                </div>

                {/* Doc content */}
                <div style={{ maxWidth: 720 }}>

                    {/* Tabs */}
                    <div style={{ display: "flex", borderBottom: "1px solid #E8E2D0", marginBottom: "3rem" }}>
                        {tabs.map((t) => (
                            <button key={t.id} onClick={() => setActiveTab(t.id)}
                                style={{ padding: "0.85rem 1.5rem", fontSize: "0.87rem", fontWeight: 500, cursor: "pointer", background: "none", border: "none", borderBottom: activeTab === t.id ? "2px solid #C9A84C" : "2px solid transparent", marginBottom: -1, color: activeTab === t.id ? "#0D0D0D" : "#6B6B6B", fontFamily: "inherit", letterSpacing: "0.03em", transition: "all 0.2s" }}>
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* Terms */}
                    {activeTab === "terms" && (
                        <div>
                            <DocMeta>Last updated: January 1, 2026 · Effective: January 1, 2026</DocMeta>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>1. Who we are</SectionTitle>
                                <PlainLanguage>Wasl Financial is the company you're signing up with. We provide USD accounts for freelancers and remote workers.</PlainLanguage>
                                <P>Wasl Financial Ltd. ("Wasl," "we," "our," or "us") is a financial technology company registered in [jurisdiction]. Our services are provided in partnership with licensed banking institutions. By creating a Wasl account, you agree to these Terms of Service.</P>
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>2. Eligibility</SectionTitle>
                                <PlainLanguage>You must be 18+ and from a country we support. We can't serve everyone yet — check our supported countries list.</PlainLanguage>
                                <P>To use Wasl, you must be:</P>
                                <UL items={["At least 18 years of age", "A resident of a country supported by Wasl", "Able to provide valid government-issued identification", "Not prohibited from financial services under any applicable law"]} />
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>3. Your account</SectionTitle>
                                <PlainLanguage>Your account is yours. Keep your credentials safe. Don't share it or use it for illegal activity.</PlainLanguage>
                                <P>You are responsible for maintaining the confidentiality of your login credentials. You agree not to share your account with others, use your account for unlawful purposes, or attempt to access other users' accounts. Wasl reserves the right to suspend accounts that violate these terms.</P>
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>4. Our services</SectionTitle>
                                <PlainLanguage>We give you a real USD account, a card, and conversion tools. We're not a traditional bank, but your deposits are held at an FDIC-insured partner bank.</PlainLanguage>
                                <P>Wasl provides: USD account with routing and account numbers, a virtual and physical Wasl debit card, currency conversion at mid-market rates plus a 0.4% fee, and platform integrations with services like Upwork, Deel, and Fiverr. Wasl is a financial technology company, not a bank. Banking services are provided by our partner institution.</P>
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>5. Fees</SectionTitle>
                                <PlainLanguage>We charge $0 to receive. 0.4% to convert. No monthly fees, ever. We always show you the full cost before you confirm.</PlainLanguage>
                                <P>Receiving USD payments is free. Currency conversion carries a flat 0.4% fee applied to the mid-market exchange rate, shown before confirmation. There are no monthly account fees, no inactivity fees, and no minimum balance requirements. We reserve the right to introduce new fees with 30 days' written notice.</P>
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>6. Termination</SectionTitle>
                                <P>You may close your account at any time by contacting support. We may suspend or close accounts that violate these terms, engage in fraudulent activity, or remain inactive for more than 24 months. Upon closure, remaining funds will be transferred to a verified bank account of your choice within 5–10 business days.</P>
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>7. Governing law</SectionTitle>
                                <P>These terms are governed by the laws of [jurisdiction]. Any disputes will be subject to binding arbitration in accordance with [arbitration body] rules, except where prohibited by local law.</P>
                            </div>
                        </div>
                    )}

                    {/* Privacy */}
                    {activeTab === "privacy" && (
                        <div>
                            <DocMeta>Last updated: January 1, 2026 · Effective: January 1, 2026</DocMeta>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>1. What we collect</SectionTitle>
                                <PlainLanguage>We collect what we need to run your account and comply with financial regulations. Nothing more.</PlainLanguage>
                                <P>We collect information you provide (name, email, ID documents, tax info), information generated by your use of Wasl (transactions, balances, device data), and information from third parties (KYC verification providers, fraud detection services).</P>
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>2. How we use your data</SectionTitle>
                                <UL items={["To open and operate your USD account", "To process transactions and prevent fraud", "To comply with KYC and AML regulations", "To send you account updates and product communications (opt-out available)", "To improve our services and fix bugs"]} />
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>3. What we never do</SectionTitle>
                                <PlainLanguage>We will never sell your data. Ever.</PlainLanguage>
                                <P>We do not sell, rent, or trade your personal data to any third party for marketing purposes. We do not show you ads. We do not share your financial data with anyone outside of legally required disclosures and the partner institutions required to operate your account.</P>
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>4. Your rights</SectionTitle>
                                <P>Depending on your jurisdiction, you may have the right to access, correct, delete, or export your personal data. Submit requests to <a href="mailto:privacy@getwasl.com" style={{ color: "#C9A84C" }}>privacy@getwasl.com</a>. We respond within 30 days.</P>
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>5. Data retention</SectionTitle>
                                <P>We retain your data for as long as your account is active plus 7 years for financial compliance purposes, as required by law. You may request deletion of non-mandatory data at any time.</P>
                            </div>
                        </div>
                    )}

                    {/* AML */}
                    {activeTab === "aml" && (
                        <div>
                            <DocMeta>Last updated: January 1, 2026</DocMeta>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>Our commitment</SectionTitle>
                                <PlainLanguage>We are legally required to prevent money laundering. We take this seriously — not just because the law says so, but because it protects everyone who uses Wasl.</PlainLanguage>
                                <P>Wasl maintains a comprehensive Anti-Money Laundering (AML) and Know Your Customer (KYC) program in compliance with applicable financial regulations. All users undergo identity verification before account activation.</P>
                            </div>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>What this means for you</SectionTitle>
                                <UL items={["You will be asked to verify your identity with a government-issued ID and selfie", "Large or unusual transactions may trigger additional verification requests", "Accounts associated with sanctioned countries or entities will be blocked", "We are legally required to report suspicious activity to relevant authorities"]} />
                            </div>
                        </div>
                    )}

                    {/* Cookies */}
                    {activeTab === "cookies" && (
                        <div>
                            <DocMeta>Last updated: January 1, 2026</DocMeta>
                            <div style={{ marginBottom: "2.5rem" }}>
                                <SectionTitle>What cookies we use</SectionTitle>
                                <PlainLanguage>We use only the cookies we need to keep the app working and understand how people use it. No ad tracking.</PlainLanguage>
                                <P><strong>Essential cookies:</strong> Required for login sessions, security, and basic app function. Cannot be disabled.</P>
                                <P><strong>Analytics cookies:</strong> We use privacy-respecting analytics (no personal data shared with third parties) to understand how users navigate the app and improve it.</P>
                                <P><strong>No advertising cookies:</strong> We do not use any advertising trackers, retargeting pixels, or third-party ad networks.</P>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </main>
    );
}