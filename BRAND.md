# Arhyn Technologies — Brand Guide

## Logo concept
The mark is an original "AH" monogram, built from three ideas at once:

- **The two diagonal strokes** read as the legs of an "A" — and, at the same time, the two verticals of an "H". One mark, two letters.
- **The crossbar** doubles as a circuit trace, with a single solid **node** at its center — representing the automation and engineering at the core of every project.
- **The tick above the apex** turns the peak of the "A" into a small upward arrow — representing growth.

No stock icon packs, no icon-font glyphs — every path is hand-built geometry (see `components/Logo.tsx` and `public/logo-*.svg`).

## Files
| File | Use |
|---|---|
| `public/logo-dark.svg` | Full lockup (mark + wordmark) for dark/ink backgrounds |
| `public/logo-light.svg` | Full lockup for light/paper backgrounds |
| `public/favicon.svg` | Browser tab icon |
| `public/app-icon.svg` | Home-screen / app icon |
| `public/og-image.svg` | Social share preview (1200×630) |
| `components/Logo.tsx` | Inline React mark, inherits `currentColor`, used in the nav and footer |

## Color palette
| Token | Hex | Role |
|---|---|---|
| `ink` | `#0B0D10` | Primary background |
| `ink-soft` | `#12151A` | Elevated surface |
| `ink-raised` | `#181C22` | Cards, inputs |
| `paper` | `#EDEBE4` | Primary text on dark |
| `dim` | `#9A9CA1` | Secondary text |
| `amber` (primary accent) | `#E8A33D` | CTAs, highlights, the signal node |
| `amber-soft` | `#F2C879` | Accent hover / glow |
| `wire` (secondary accent) | `#6FA8A0` | Data/tech accents, used sparingly |

Primary accent (`amber`) against `ink` (`#0B0D10`) resolves to a **contrast ratio of ~8.9:1** — comfortably AA/AAA for text use. Body text `paper` on `ink` resolves to ~15.8:1.

## Typography
| Role | Typeface | Notes |
|---|---|---|
| Headlines | Space Grotesk (600/700) | Geometric, technical, bridges the other two faces |
| Emphasis accent word | Instrument Serif (italic) | Used once per section, max — the "human business" voice |
| Body copy | Inter | Readable at length |
| Labels / eyebrows / data | IBM Plex Mono | Terminal/systems voice for structure, not for prose |

## Usage rules
- Never stretch, recolor outside the palette, or add drop shadows to the mark.
- Minimum clear space around the mark = the height of the node circle × 4.
- On photography or busy backgrounds, always place the mark inside the ink rounded-square container (see `favicon.svg`).
