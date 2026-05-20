# Plan: Spacing Standardization & Token Migration

## Objective
Standardize the design token spacing scale to follow a consistent 1.5x T-shirt progression and migrate all hardcoded SCSS values to use Terrazzo tokens. This will improve maintainability and ensure visual consistency across the site.

## Proposed Spacing Scale
| Token | Value | Change |
| :--- | :--- | :--- |
| `spacing.xs` | `0.25rem` (4px) | **New** (For micro-spacing/internal padding) |
| `spacing.sm` | `0.5rem` (8px) | Unchanged |
| `spacing.md` | `1rem` (16px) | Unchanged |
| `spacing.lg` | `1.5rem` (24px) | Unchanged |
| `spacing.xl` | `2.25rem` (36px) | **New** (Matches current hardcoded content flow) |
| `spacing.xxl` | `3rem` (48px) | **Renamed** (Was `xl`) |

## Key Changes

### 1. Update Design Tokens (`src/tokens.json`)
- Add `xs` (0.25rem).
- Rename `xl` to `xxl`.
- Add `xl` (2.25rem).

### 2. SCSS Migration
- **Refactor `xl` usage:** Update all existing `var(--spacing-xl)` references to `var(--spacing-xxl)` to preserve the 3rem intent.
- **Replace Hardcoded Values:**
    - `2.25rem` / `36px` -> `var(--spacing-xl)`.
    - `0.625rem` (Header gap) -> `var(--spacing-sm)`.
    - `0.1rem` / `0.2rem` (Code padding) -> `var(--spacing-xs)`.
    - `1.875rem` (Mobile header margin) -> `var(--spacing-lg)`.
    - `3.125rem` (Header margin) -> `var(--spacing-xxl)`.
- **Maintain Gutter Logic:** Ensure the `--article-gutter` variable in `component.article.scss` continues to use the `var(--size-gutter)` token.

## Verification & Testing
- **Visual Regression:** Check the main blog list and article pages to ensure vertical rhythm and gaps are preserved.
- **Token Build:** Run `npm run build` to ensure Terrazzo generates the new CSS variables correctly.

## Exceptions (Intentional Hardcoding)
- `12.5rem` green bar: Remains hardcoded as it is a unique presentational choice.
- `2px` / `1px` borders: Remain hardcoded as they relate to `border` width, not `spacing`.
