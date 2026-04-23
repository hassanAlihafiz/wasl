import type { Metadata } from "next";
import "./globals.css";
import { WaitlistModalProvider } from "@/lib/useWaitlistModal";
import WaitlistModal from "@/components/WaitlistModal";

export const metadata: Metadata = {
  icons: {
    icon: "/WaslLogo-App.png"
  },
  title: "Wasl — USD accounts for remote workers",
  description:
    "Open a USD account for remote workers and freelancers globally. Receive payments from Upwork, Deel, Fiverr and more.",
};

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?" +
  [
    "family=Instrument+Serif:ital@0;1",
    "family=Inter+Tight:wght@300;400;500;600;700",
    "family=JetBrains+Mono:wght@400;500",
    "family=Noto+Naskh+Arabic:wght@400;500;600",
    "family=Playfair+Display:ital,wght@0,400;0,700;1,400",
    "family=DM+Serif+Display:ital@0;1",
    "family=Space+Grotesk:wght@300;400;500;600;700",
    "family=IBM+Plex+Sans:wght@300;400;500;600;700",
    "family=IBM+Plex+Mono:wght@400;500",
    "family=Manrope:wght@300;400;500;600;700",
    "family=Fraunces:ital,wght@0,400;0,600;1,400",
  ].join("&") +
  "&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={FONTS_HREF} rel="stylesheet" />
      </head>
      <body>
        <WaitlistModalProvider>
          {children}
          <WaitlistModal />
          {/* <TweaksPanel /> */}
        </WaitlistModalProvider>
      </body>
    </html>
  );
}