export const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  fontPair: "modernist",
  accent: "canary",
  headline: "dollars",
} /*EDITMODE-END*/ as const;

export type FontPairKey = "editorial" | "modernist" | "classic" | "contempo";
export type AccentKey = "canary" | "amber" | "honey" | "saffron";
export type HeadlineKey = "dollars" | "world" | "border";

export interface FontPair {
  label: string;
  sub: string;
  display: string;
  body: string;
  mono: string;
}

export const FONT_PAIRS: Record<FontPairKey, FontPair> = {
  editorial: {
    label: "Editorial",
    sub: "Instrument · Inter",
    display: '"Instrument Serif", serif',
    body: '"Inter Tight", system-ui, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  modernist: {
    label: "Modernist",
    sub: "DM Serif · Space",
    display: '"DM Serif Display", serif',
    body: '"Space Grotesk", system-ui, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  classic: {
    label: "Classic",
    sub: "Playfair · IBM Plex",
    display: '"Playfair Display", serif',
    body: '"IBM Plex Sans", system-ui, sans-serif',
    mono: '"IBM Plex Mono", monospace',
  },
  contempo: {
    label: "Contempo",
    sub: "Fraunces · Manrope",
    display: '"Fraunces", serif',
    body: '"Manrope", system-ui, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
};

export interface Accent {
  label: string;
  sub: string;
  yellow: string;
  deep: string;
  soft: string;
}

export const ACCENTS: Record<AccentKey, Accent> = {
  canary: { label: "Canary", sub: "#F5C518", yellow: "#F5C518", deep: "#D9A400", soft: "#FFE177" },
  amber: { label: "Amber", sub: "#E89B2C", yellow: "#E89B2C", deep: "#B8771A", soft: "#F7C878" },
  honey: { label: "Honey", sub: "#D4B24C", yellow: "#D4B24C", deep: "#A68833", soft: "#EBD489" },
  saffron: { label: "Saffron", sub: "#F3BE2E", yellow: "#F3BE2E", deep: "#C7951C", soft: "#FBD96F" },
};

export interface Headline {
  label: string;
  main: string;
  ar: string;
}

export const HEADLINES: Record<HeadlineKey, Headline> = {
  dollars: {
    label: "Get paid in dollars.",
    main: "Get paid in<br/>dollars. <em>From<br/>anywhere.</em>",
    ar: "استلم بالدولار. من أي مكان.",
  },
  world: {
    label: "Your work, worldwide.",
    main: "Your work,<br/><em>worldwide.</em><br/>Paid in USD.",
    ar: "عملك، حول العالم.",
  },
  border: {
    label: "No borders, just banking.",
    main: "No borders,<br/><em>just banking.</em>",
    ar: "بلا حدود، فقط خدمات مصرفية.",
  },
};
