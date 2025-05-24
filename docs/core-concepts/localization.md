---
sidebar_position: 3
---

# Localization

We use [i18next](https://www.i18next.com/) and [react.i18next](https://react.i18next.com/) to handle switching between languages.

- The entrypoint for localization configurations is at `/src/core/lang/i18n.ts`.
- All locales translations are at `/src/core/lang/locales`.
- To support antd calendar component localization a special configuration is added at `/src/core/lang/dayjs.ts`.

## Custom `useTranslation` Hook

We introduced a custom `useTranslation` hook at `/src/core/hooks/translation.ts`, that extends the functionality of i18next `useTranslation` hook.
