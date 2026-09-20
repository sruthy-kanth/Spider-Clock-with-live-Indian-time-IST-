# 🕷️ Spider Clock — Interactive Live IST Web Application

An artistic, production-quality Spider Clock web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **SVG Inverse Kinematics**. Recreates the visual experience of the reference video with articulated spider leg time indicators, interlocking rotating spiderweb gears, live Indian Standard Time (IST) synchronization, and customizable themes.

---

## 🌟 Features

- **Articulated Spider Leg Kinematics**:
  - The spider's legs act as live clock hands (Hour, Minute, and Second pointers).
  - 2-segment jointed leg geometry (`handHr01/02`, `handMin01/02`, `handSec01/02`) preserves natural spider leg anatomy while pointing precisely to time numerals.
  - 5-6 natural auxiliary resting legs with subtle breathing idle animation.

- **Rotating Spiderweb Gear Mandalas**:
  - Multi-layered web cogwheels behind the spider that continuously spin in alternating directions.

- **Live Indian Standard Time (IST) Engine**:
  - Synchronizes with `Asia/Kolkata` timezone via high-reliability Time APIs (`timeapi.io` / `worldtimeapi.org`).
  - Automatic fallbacks to calculated UTC+5:30 offset with continuous high-precision `requestAnimationFrame` ticker.

- **Rich Customization Panel**:
  - **Theme Palettes**: Dark Gothic, Electric Neon, Cyberpunk, Silk White, Emerald Forest.
  - **Visual Adjustments**: Spider color, accent glow, web opacity, web rotation speed.
  - **Toggles**: 12/24-hour format, clock numerals (1-12), seconds leg pointer, digital overlay, date display, reduced motion.
  - **Synthesized Audio**: Web Audio API mechanical clock ticking sound with volume control.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `v18.0.0` or higher
- `npm` or `pnpm` or `yarn`

### Installation & Run

```bash
# 1. Clone or navigate to directory
cd "spider clock"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment on Vercel

This application is ready for 1-click deployment on **Vercel**.

### Vercel CLI Deployment:
```bash
npm install -g vercel
vercel
```

### GitHub / Vercel Dashboard Deployment:
1. Push this code repository to GitHub/GitLab.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the repository.
4. Keep framework preset as **Next.js**.
5. Click **Deploy**.

No environment variables or API keys are required as all time synchronization APIs are free public endpoints with local offset fallbacks!
