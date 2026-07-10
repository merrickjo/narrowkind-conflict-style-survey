# Narrowkind Design System

**Narrowkind** is a Scripture-teaching brand built around two visual registers that share one hue family, one type pair, and one set of quality gates:

1. **Deck/Slide** — flat color fields (no gradients, no shadows) for teaching decks: covers, scripture/evidence slides, roadmap/principles/big-idea slides, and comparison/list cards.
2. **Illustration/Social** — loose editorial line art on cream, for social posts and in-deck pause ("Selah") moments.

## Sources

This design system was authored from a written brand-guidelines document supplied directly by the user (no codebase, Figma file, or slide deck was attached). Everything here — tokens, components, slide templates — is derived from that spec. **If a codebase, Figma link, or sample deck exists for Narrowkind, attach it and this system should be revised to match it as ground truth.**

## Content Fundamentals

- **Register:** teaching/expository, not casual. Sentences are declarative and short. Titles favor a single strong claim per slide ("Grace That Finds You", "Law vs. Grace") over descriptive phrasing.
- **Structure:** an "eyebrow" line (small caps, letter-spaced) sets context above every title — a part/session number, a slide's rhetorical function ("Evidence", "Roadmap", "Comparison"), or a series name.
- **Scripture is quoted, not paraphrased,** and always tagged with its reference (e.g. "Romans 6:23") in the gold eyebrow style, set apart from surrounding sans copy in serif italic.
- **No emoji.** No exclamation-heavy copy. Tone is confident and calm, not hype.
- **Perspective:** second person is used for direct address in teaching copy ("You have been saved"); first person plural for gathered/communal framing. Neither is fixed — determined by whether the moment is proclamation (2nd person) or evidence (quoted scripture, 3rd person as written).
- **Vibe:** editorial, restrained, a little literary — closer to a well-typeset study guide or a mid-century church bulletin than a startup deck.

## Visual Foundations

- **Color:** two registers on one warm hue family. Deck fields are flat and saturated-dark (burnt orange, deep maroon, charcoal-green) with cream text; illustration/social is cream-based with charcoal line art and a brighter coral accent. Burnt orange and coral are never interchangeable — orange is the deep/matte field color, coral is the brighter sparing accent. **Zero gradients, anywhere, in either register.**
- **Type:** exactly two families. Helvetica/Arial (700–800 weight only) carries every headline, UI element, and body line in both registers. Georgia (regular/italic) is reserved exclusively for quoted scripture — never mixed with sans in the same text block. No Playfair Display, no Roboto Slab.
- **Spacing:** an 8-point-derived scale (4 → 128px). Slide padding runs large (64–96px) to protect the negative-space quality gate.
- **Backgrounds:** flat color fields only in deck mode — no photography, no texture, no full-bleed imagery. Illustration/social mode uses cream as a base with risograph-grain line art (texture belongs to illustration only, never to deck fields).
- **Animation:** not specified in the source brief — treat decks as static; if motion is added, keep it minimal (simple fades) consistent with the flat, restrained system. No bounce/spring easing implied anywhere in the brief.
- **Hover/press states:** not specified in the source brief. Recommendation embedded in `Button.jsx`: no shadow/elevation change on hover — shift to a flat, slightly darker/lighter shade of the same fill color; press states should not scale or shrink, matching the flat, non-skeuomorphic system.
- **Borders:** a single hairline treatment — 1px, `rgba(0,0,0,0.15)` on light surfaces — used as the *only* divider/rule style. An accent-gold version of the same hairline is the sole "decorative" rule, capped at 1–2 uses per slide.
- **Shadows:** none, anywhere. This is a flat system by explicit rule.
- **Corner radii:** 0px system-wide (`--radius: 0`). The only exception is a hair of rounding (2px) on small `Badge` pills — never a full capsule.
- **Cards:** flat cream background, charcoal text, 1px hairline border (or gold border for the one accented card in a set). No shadow, no gradient fill.
- **Imagery color vibe:** not directly specified — illustration/social calls for "risograph grain texture," implying a warm, slightly under-saturated, print-grain look rather than clean digital color. No photoreal imagery permitted in either register.
- **Layout rules:** left-aligned text blocks in deck mode; one idea per slide; no more than ~60% of any field populated with text/graphic (quality gate).
- **Transparency/blur:** not used — the brief specifies flat opaque fields; no blur or glass effects appear anywhere in the source spec.

## Interaction Principles

The brief doesn't specify motion/interaction rules directly, so here they are made explicit — grouped under four parent principles (**Unified**, **Universal**, **Iconic**, **Conversational**) that extend the flat, restrained visual system into behavior.

**Unified** — one motion vocabulary system-wide
1. **One motion curve, system-wide** — a single easing function + duration set used on every transition; no per-slide custom motion.
2. **State consistency** — hover/active/disabled are always communicated the same way (flat color-step shift), never a shape or size change.
10. **Silence is a state** *(also Conversational)* — given the whitespace discipline, stillness is meaningful; motion is reserved for navigation/evidence moments, not applied everywhere by default.

**Universal** — accessible without relying on motion
3. **Motion is optional, never load-bearing** — any information conveyed by motion must also exist in static text/color; reduced-motion users lose nothing.
4. **Text-first feedback** — status, errors, and confirmations lead with words, not icon-only or motion-only cues; holds up across languages and literacy levels.

**Iconic** — matches the flat, single-accent visual system
5. **One primary action per screen** — only one element gets the gold accent as an interactive cue at a time; it signals "the" next step, not "a" next step.
6. **Flat-state feedback only** — with no shadow/elevation vocabulary, every interaction state (pressed, focused, disabled) reads through a fixed color-step alone.

**Conversational** — motion mirrors the teaching structure
7. **Purposeful transition only** — motion explains a relationship (this becomes that, this reveals that); never a decorative flourish.
8. **Directional continuity** — transitions move in the same direction as the content logic (eyebrow → title, cover → evidence); motion mirrors reading order.
9. **Micro-acknowledgment** — every tap gets an immediate, minimal response (~100–150ms color/opacity step), confirming the system "heard" the action before anything else happens.

## Iconography

- The brief specifies **Material Symbols** for any functional icon need in deck mode, used sparingly ("no decorative icons"). No icon set is specified for illustration/social mode — illustration output is meant to be genuine line art, not icon-font glyphs.
- **No logo file was supplied.** Per policy, none was drawn or approximated — the `Brand / Wordmark` card renders "Narrowkind" in plain `--font-sans` type wherever a mark would go. If a logo exists, attach it and this system should be updated to use it instead of the type-only placeholder.
- No illustration assets (line art, risograph textures) were supplied either — the "Selah Pause" slide template is a labeled placeholder describing the re-palette protocol, not a generated illustration. Do not generate illustration art programmatically for this system; source it from the brand's real illustrator/asset library.
- Material Symbols can be loaded from Google's CDN (`https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined`) when a functional icon is genuinely needed on a slide.

## Fonts

Both `--font-sans` (Helvetica Neue/Arial) and `--font-serif` (Georgia) are ubiquitous system fonts — **no webfont files were needed or added.** If Narrowkind licenses a proprietary Helvetica variant, drop the `.woff2` files into `assets/fonts/` and add `@font-face` rules to `tokens/typography.css`; the token names are already in place.

## Intentional additions / omissions

No component library source was attached, so the standard primitive set was **sized down** to what a flat, no-shadow teaching-deck/social system actually needs — not a full app-shell inventory:

- Built: `Button`, `Tag` (eyebrow label), `Badge` (small marker pill), `Divider` (hairline rule), `Card` (comparison/list card), `Callout` (scripture/evidence quote block).
- Omitted: `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Dialog`, `Toast`, `Tooltip`, `Tabs` — the brief describes no interactive app surface (forms, navigation, notifications) for Narrowkind. Add these only if/when a real product surface (app, form, site) is attached.

## Index

```
styles.css                     — root stylesheet (@import list only)
tokens/
  colors.css                   — deck + illustration color tokens
  typography.css               — font families, weights, type scale
  spacing.css                  — spacing scale, hairline/radius tokens
components/core/
  Button.jsx / .d.ts / .prompt.md
  Tag.jsx / .d.ts / .prompt.md
  Badge.jsx / .d.ts / .prompt.md
  Divider.jsx / .d.ts / .prompt.md
  Card.jsx / .d.ts / .prompt.md
  Callout.jsx / .d.ts / .prompt.md
  core.card.html               — Design System tab card (all 6 components)
guidelines/
  colors-*.card.html            — deck fields, cream/gold, illustration, hue-family rule
  type-*.card.html               — sans, serif, eyebrow, scale
  spacing-*.card.html            — scale, negative-space example, hairline
  brand-*.card.html              — wordmark placeholder, quality gates
slides/
  slide-cover.card.html          — Cover/Closing field
  slide-scripture.card.html      — Scripture/Evidence field
  slide-roadmap.card.html        — Roadmap/Big-Idea field
  slide-comparison.card.html     — Comparison/List cream cards
  slide-selah-pause.card.html    — Illustration-in-field placeholder
SKILL.md                        — portable skill file for Claude Code
```

No UI kit was built — the source brief describes decks and social assets, not an app or website product. If Narrowkind has a web/app surface, attach its codebase or Figma file and a UI kit can be added.
