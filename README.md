# ONAM

ONAM is not a customer app. It is a restaurant retention engine operated through the restaurant's Android device. One staff-facing mobile app supports shop teams and can be handed to a customer at the counter for consent, number capture, and reward interaction.

## Foundation
- React Native, Expo, Expo Router, TypeScript; mobile-only and Android-first.
- UI routes in `app/`, shared components in `src/components/`, central theme in `src/theme/`.
- Service contracts in `src/services/`, basic domain types in `src/types/`, future trusted backend modules in `functions/src/`.
- Firebase configuration and Firestore rules are placeholders only.

## Principles
Keep the experience warm and simple for local shops. Centralize design tokens. Separate UI, services, business logic, and backend. Keep credentials out of source. Add Firebase, customer-data handling, AI, and WhatsApp only in approved later phases.

## Current phase
Phase 0 — structural foundation. Screens demonstrate navigation only. No real sign-in, customer accounts, customer data collection, offers, rewards, Firebase, AI, or WhatsApp are connected.

## Start
Install dependencies with Node.js LTS, then run `pnpm start` or `pnpm android`. Run `pnpm typecheck` for the app type check.
