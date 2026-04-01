# Continue — 2026-04-01

## Current Goal
tool-ad-builder v1 is complete and deployed to Vercel (augment-ad-builder.vercel.app). No active feature work — tool is live and polished.

## Where We Left Off
Vercel deployment fixed: deleted unused StatHero/LogoTypeProductShot templates (were causing tsc errors), force-pushed subtree split to chileeinc/augment-ad-builder. Deployment is working.

## Next Steps
1. (Optional) Create a `deploy.sh` script to wrap the git subtree push workflow into one command
2. Start v2 planning — see `tool-ad-builder-v2/CONTINUE.md` for that context

## Active Files
- `src/templates/BigTypeBody.tsx/.css` — main template, fully polished
- `src/templates/CustomerQuote.tsx/.css` — attribution block, fully polished
- `HANDOFF.md` — full session summary

## Decisions Made This Session
- Subtree push to separate GitHub repo (chileeinc/augment-ad-builder) — Vercel deploys from there
- `build.sh` added to handle directory name with spaces
- Deleted StatHero + LogoTypeProductShot (dead code causing TS errors on Vercel)

## Open Questions / Blockers
- Deploy script: assistant offered to create one, user hadn't confirmed before session-continue ran
