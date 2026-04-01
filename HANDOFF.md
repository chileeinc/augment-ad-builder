# Handoff — 2026-04-01

## What Was Accomplished

- **Simplified to 2 templates + 4 purposes** — removed StatHero, LogoTypeProductShot, and Event purpose; trimmed stat/statLabel fields from remaining purposes
- **Design pass on both templates** — Augment logo moved to upper-left (prominent), CTA converted to a filled green button, body copy color changed from accent-green to muted
- **Tonal theme fixed** — all non-background elements now use flat `#99F7A9` (augment-200) only; no more augment-300 shades
- **Grid background bug fixed** — `AppearancePanel` was passing `'fine-grid'` instead of `'grid'`
- **16:9 responsive layout** — changed `container-type` to `size`, rewrote all spacing to use `min(cqw, cqh)` so landscape formats don't overflow
- **CustomerQuote reworked** — quote mark on its own line (block element), name/title moved below quote, all mono text in ALL CAPS, name box border removed
- **Footer border removed** — cleaned up the faint line above CTA on all ads
- **Reset button** — added at bottom of left panel, wired to DEFAULT_CONFIG

## What's Next

- **v2 is queued** — a Next.js 15 AI-powered version with prompt → variants flow is planned in `2- Tools/tool-ad-builder-v2/`. Spec and implementation plan written, no code yet.
- **Supabase image library** — currently gracefully degrades when env vars missing; needs a real project wired up (deferred to v2)
- **Export quality** — `html-to-image` export hasn't been manually verified at full resolution; worth spot-checking
- **No BigTypeBody for case-study/customer-proof** — users can select the "wrong" template for their purpose; consider locking template to purpose or guiding selection

## Open Questions / Blockers

- Is the v1 ad builder considered "done" or will it continue to receive updates alongside v2?
- Should the tonal theme's muted text be `#99F7A9` (same as fg) with only size/weight for hierarchy, or should some differentiation be added another way?

## Cleanup Done This Session

- Simplified `templates/index.ts`: merged duplicate import from `../lib/types` into one line
- No .DS_Store or junk files found in the tool-ad-builder directory
- No hardcoded secrets found
- No dead code blocks found
