# Skillect Masterclass — Theme Colors Reference

All colors are defined as CSS custom properties in `app/globals.css` under `:root` (light) and `.dark` (dark mode).

---

## Violet / Purple Palette (from design spec)

### Violet Scale
| Name       | HEX       | Usage                        |
|------------|-----------|------------------------------|
| violet-95  | `#EFEBFD` | Light bg tints               |
| violet-90  | `#E2D9FA` | Dark-mode heading color      |
| violet-80  | `#A585FF` | Dark-mode primary hover      |
| violet-70  | `#875CFF` | Dark-mode primary            |
| violet-60  | `#6933FF` | **Light-mode primary (CTA)** |
| violet-50  | `#5F2EE6` | Light-mode primary hover     |
| violet-40  | `#5429CC` | —                            |
| violet-30  | `#4A24B3` | —                            |
| violet-20  | `#351F72` | —                            |
| violet-10  | `#2D1C59` | **Light-mode secondary (headings)** |

### Purple Scale
| Name       | HEX       | Usage                        |
|------------|-----------|------------------------------|
| purple-95  | `#F6EBFF` | Light bg tints               |
| purple-90  | `#EAD2FF` | —                            |
| purple-80  | `#BD70FF` | Video border gradient accent |
| purple-70  | `#B35CFF` | Dark-mode accent             |
| purple-60  | `#A033FF` | **Light-mode accent**        |
| purple-50  | `#902EE6` | —                            |
| purple-40  | `#8029CC` | —                            |
| purple-30  | `#601F99` | —                            |
| purple-20  | `#451E6B` | —                            |
| purple-10  | `#331B4C` | —                            |

---

## Core Design Tokens

| Token               | Light Mode    | Dark Mode     | Usage                 |
|----------------------|---------------|---------------|-----------------------|
| `--primary`          | `#6933FF`     | `#875CFF`     | CTAs, badges          |
| `--primary-hover`    | `#5F2EE6`     | `#A585FF`     | Button hover          |
| `--secondary`        | `#2D1C59`     | `#E2D9FA`     | Headings              |
| `--accent`           | `#A033FF`     | `#B35CFF`     | Secondary accent      |

## Background Tokens

| Token               | Light Mode    | Dark Mode     | Usage                 |
|----------------------|---------------|---------------|-----------------------|
| `--bg`               | `#FFFFFF`     | `#0f0f17`     | Page body             |
| `--bg-subtle`        | `#F7F8FA`     | `#16161f`     | Alternating sections  |
| `--bg-section`       | `#F0F2F5`     | `#1a1a24`     | Card/section bg       |
| `--white`            | `#FFFFFF`     | `#1c1c28`     | Card surfaces         |

## Text Tokens

| Token               | Light Mode    | Dark Mode     |
|----------------------|---------------|---------------|
| `--text`             | `#1A1A2E`     | `#e8e8ed`     |
| `--text-muted`       | `#5A5A72`     | `#9a9ab0`     |
| `--text-light`       | `#8E8EA0`     | `#6a6a82`     |

## Border & Shadow Tokens

| Token          | Light Mode                        | Dark Mode                         |
|----------------|-----------------------------------|-----------------------------------|
| `--border`     | `#E2E4E9`                         | `rgba(255,255,255,0.08)`          |
| `--shadow-sm`  | `0 1px 3px rgba(0,0,0,0.06)`     | `0 1px 3px rgba(0,0,0,0.3)`      |
| `--shadow-md`  | `0 4px 16px rgba(0,0,0,0.08)`    | `0 4px 16px rgba(0,0,0,0.4)`     |
| `--shadow-lg`  | `0 8px 32px rgba(0,0,0,0.1)`     | `0 8px 32px rgba(0,0,0,0.5)`     |
| `--shadow-xl`  | `0 16px 48px rgba(0,0,0,0.12)`   | `0 16px 48px rgba(0,0,0,0.6)`    |

---

## Component-Specific Overrides

### Dark-Only Background Overrides
| Component         | Dark BG                                        |
|-------------------|------------------------------------------------|
| Navbar (scrolled) | `rgba(15,15,23,0.85)` glass                   |
| BottomCTA         | `#12101c → #17142a → #141120`                 |
| TrustSection      | `#12101c → #14122a → #111020`                 |
| Footer            | `#0c0c14`                                      |

### Always-Dark Components
| Component          | Background                                    |
|--------------------|-----------------------------------------------|
| CountdownBanner    | `#2D1C59 → #6933FF`                          |
| CourseDetails cards| `#0d0d1a`                                     |

---

## How Theme Toggle Works

1. `AnimatedThemeToggler` toggles `.dark` class on `<html>`
2. Preference saved to `localStorage("theme")`
3. CSS vars react via `.dark` selector
4. View transition creates circular wipe animation
