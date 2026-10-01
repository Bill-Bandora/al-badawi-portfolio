# Bandora Mobile UX Plan

## Audit

- Desktop layouts are stable and remain the reference from 1024 px upward.
- The existing mobile header duplicates desktop navigation behavior through a drawer.
- Long pages currently collapse grids into a single vertical stream.
- Project filters occupy several rows on small screens.
- The contact action is fixed but not draggable and is not coordinated with a bottom navigation.

## Mobile app shell

- Compact glass header with crest, brand and language control.
- Persistent five-item bottom navigation with localized routes and safe-area padding.
- Main content reserves space for the bottom navigation.
- Contact FAB supports tap, drag, edge snapping, bounds, resize validation and persisted position.

## Page patterns

- Home: compact hero, 2-column capability grid and swipeable featured-project deck.
- Projects: filter bottom sheet, active-filter chip and compact cards.
- Project detail: sticky section tabs, mobile problem/solution switch and horizontal related-project deck.
- Services: horizontal service rails and compact detail cards on mobile.
- About: compact brand profile, expandable biography and technology tabs.
- Blog: featured/feed cards with compact mobile spacing and scroll snapping.
- Contact: dark mobile form surface with 44 px minimum controls.

## Guardrails

- No route, content, canonical, hreflang, schema or sitemap changes.
- All tab and accordion content remains in prerendered HTML.
- No service worker, install prompt or large UI dependency.
- Reduced-motion behavior and keyboard navigation remain supported.

## Verification and rollout

- Responsive checks at 360, 375, 390, 393, 412, 430 and 768 px; desktop regression checks at 1440 and 1920 px.
- Interaction checks cover bottom navigation, filter sheet, segmented project content, language/RTL behavior and FAB drag/tap persistence.
- TypeScript, lint, unit/integration tests, production build and all 66 prerendered routes must pass before deployment.
- Lighthouse is measured for mobile and desktop; deployment keeps the previous container image as the immediate rollback target.
