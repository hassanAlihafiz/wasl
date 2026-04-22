# Wasl — Next.js

Component-based Next.js (App Router) port of `Landing Page.html`.

## Structure

```
nextjs/
├── app/
│   ├── layout.tsx           # Root layout, Google Fonts, metadata
│   ├── page.tsx             # Landing page — composes all sections
│   └── globals.css          # Design tokens + global styles
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── AccountCard.tsx
│   ├── Marquee.tsx
│   ├── HowItWorks.tsx
│   ├── Platforms.tsx
│   ├── Features.tsx
│   ├── Quote.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── WaitlistForm.tsx
│   ├── WaitlistModal.tsx
│   └── TweaksPanel.tsx
├── lib/
│   ├── tweaks.ts            # FONT_PAIRS, ACCENTS, HEADLINES
│   └── useWaitlistModal.ts  # Modal open/close hook + context
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## Install & run

```bash
cd nextjs
npm install
npm run dev
```

Open http://localhost:3000

## Notes

- `"use client"` is marked on components that use state, effects, or event handlers (Nav, Hero form, TweaksPanel, WaitlistModal, Marquee animation).
- Static sections (HowItWorks, Platforms, Features, Footer) are Server Components.
- Tokens live as CSS vars in `globals.css`; `TweaksPanel` overwrites them at runtime via `document.documentElement.style`.
- The `EDITMODE-BEGIN`/`EDITMODE-END` markers are preserved in `lib/tweaks.ts` so the host can persist edits.
