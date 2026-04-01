# tool-ad-builder

Browser-based ad creation tool for the Augment marketing team. React + Vite SPA. Templates are React components styled with CSS; `html-to-image` captures the canvas div for export.

## Stack
React 18, TypeScript, Vite, html-to-image, @supabase/supabase-js, Vitest

## Session Continuity
Check `HANDOFF.md` for latest status before starting work.

---

## Decisions

- **2026-04-01** Kept only 2 templates (BigTypeBody, CustomerQuote) and 4 purposes — simpler to maintain and covers real use cases
- **2026-04-01** Tonal theme uses flat `#99F7A9` everywhere non-background — no opacity tricks, hierarchy comes from size/weight only
- **2026-04-01** `container-type: size` (not `inline-size`) on `.ad-canvas` — required for `cqh` units to work in templates
- **2026-04-01** All spacing in templates uses `min(Xcqw, Xcqh)` — prevents overflow at landscape (16:9) aspect ratios; text sizes use `min(Xcqw, (16/9)Xcqh)` to stay consistent at 16:9

---

## Tribal Knowledge

- **`cqh` units need `container-type: size`** — if you add a new template and `cqh` values aren't resolving, check that `AdPreview.css` still has `container-type: size` on `.ad-canvas`. Reverting to `inline-size` breaks landscape layouts.
- **Background class naming** — background type `'grid'` maps to CSS class `.bg-grid`. The type was previously `'fine-grid'`; don't reintroduce that name.
- **Tonal `--ad-fg-muted`** — currently same hex as `--ad-fg` (`#99F7A9`). This is intentional per design direction. If hierarchy feels flat, differentiate via font-weight/size only, not color.
- **Supabase image library gracefully degrades** — if `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` aren't set, `ImageLibrary` returns an empty list silently. No crash.
- **`html-to-image` captures the exact div** — the `previewRef` on `.ad-canvas` is what gets exported. Any element outside `.ad-canvas` (panel UI, etc.) won't appear in exports.
- **IBM Plex / `var(--font-mono)` elements must be ALL CAPS** — `text-transform: uppercase` required on any element using the mono font. This is a brand rule.

---

## Debt Register

- Supabase project not wired up — image library always empty in dev — deferred to v2 (2026-04-01)
- No template/purpose locking — users can pick CustomerQuote with a product-feature purpose (fields won't match) — deferred (2026-04-01)
- Export quality at full resolution not verified — html-to-image behavior at 1080px+ untested — deferred (2026-04-01)

---

## Session Context

- **2026-04-01**: Built out the full tool from scaffold to completion, then simplified it down — cut from 4 templates/5 purposes to 2/4, fixed tonal theme, made layout responsive to aspect ratio, redesigned CustomerQuote attribution block

---

## Churn Map

- `src/templates/CustomerQuote.css` — touched 5+ times, most-changed file; layout kept evolving
- `src/templates/BigTypeBody.css` — touched 4 times; logo position, button, spacing all iterated
- `src/templates/templates.css` — touched 3 times; tonal theme color kept adjusting
