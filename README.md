# The Chronophage's Lament

The official website for *The Chronophage's Lament* by Amanda Hines — read all 12 chapters online, meet the author, sign up for the newsletter, download wallpapers, and support the work with a donation.

**Live site:** https://chronophage-lament.onrender.com

## What's on the site

- **12 chapters**, readable in the browser (`/chapter/:id`), with chapter search
- **About the Author**
- **Newsletter signup** (`/newsletter`)
- **Donations via Stripe Checkout** (`/donate`) — $5, $10, $25, $50, or $100
- **Wallpapers** (`/wallpapers`)

## Tech stack

- Vite + React 19 + TypeScript + Tailwind CSS
- Express server — Stripe Checkout + webhook, newsletter email via SMTP (nodemailer)
- pnpm
- Docker, deployed on Render (free plan, Oregon)

## Run it locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Environment variables

| Variable | What it's for |
| --- | --- |
| `STRIPE_SECRET_KEY` | Stripe secret key for Checkout |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for the Stripe webhook at `/api/stripe/webhook` (`checkout.session.completed`, `payment_intent.succeeded`) |
| `SMTP_HOST` | SMTP server for outgoing mail |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `SMTP_FROM` | From address for newsletter mail |

Set them in Render (Environment tab) for the live site, or in a local `.env` file for development. Never commit secrets.

## Build & deploy

```bash
pnpm build      # vite build + esbuild server bundle
pnpm start      # NODE_ENV=production node dist/index.js
pnpm check      # tsc --noEmit
```

Deploys automatically on Render from `main` via `render.yaml` (Docker).

## Docs in this repo

- `EMAIL_SETUP.md` — SMTP setup
- `NEWSLETTER_GUIDE.md` — how the newsletter works
- `EMAIL_PREVIEW.md` — email preview
- `SECURITY.md` — security policy
- `ideas.md` — design ideas for the site

## License

MIT
