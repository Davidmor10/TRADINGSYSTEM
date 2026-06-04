# Trading Journal Pro — Zero-Setup Edition

A fully self-contained trading journal. No database, no API keys, no environment variables.
All data persists in **localStorage**.

## Deploy in 3 steps

### 1. Install Node.js
Download from **https://nodejs.org** (LTS)

### 2. Install & run locally
```bash
cd trading-journal-v2
npm install
npm run dev
# Open http://localhost:3000
```

### 3. Deploy to Vercel (one-click)
```bash
# Push to GitHub, then import at vercel.com
# OR use the Vercel CLI:
npx vercel
```
No environment variables needed. Works immediately.

---

## Features

| Page | What it does |
|------|-------------|
| **Dashboard** | KPI cards, equity curve, calendar heatmap, recent trades table |
| **Today** | Daily bias, market notes, emotional state, day grade |
| **Trade Log** | Full CRUD with sort/filter, auto P&L calc ($20/pt NQ), expand for notes |
| **Statistics** | Win rate, profit factor, breakdown by setup/emotion/direction, rules adherence ring |
| **Rules** | Pre-trade checklist with categories, add/edit/deactivate rules |
| **Billing** | Mock Stripe pricing card, simulated upgrade flow, premium state toggle |

## Data
- All data is in `localStorage` under key `tj_v2_state`
- 15 seed trades are pre-loaded so you can see the app fully populated immediately
- Reset to defaults: open browser console and run `localStorage.clear()`

## Tech Stack
- Next.js 14 (App Router, Client Components)
- Tailwind CSS with custom dark theme
- date-fns for date logic
- Zero external services
