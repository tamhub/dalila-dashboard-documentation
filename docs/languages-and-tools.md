---
sidebar_position: 3
---

# Languages And Tools

## React

We use React.js version 18 to build the SPA dashboard.

## TypeScript

The codebase is fully typed using TypeScript for more reliable and maintainable code.

## UI Library

We use [Ant Design (antd for short)](https://ant.design/) as the main UI component library.

## Styles

The early version of the app used plain CSS and CSS modules, and Tailwind was introduced
later for faster development.

The core setup for the app styles is divided between:

- `src/core/styles` folder where you can find the colors variables, typography, global styles, and reusable styles.
- `tailwind.config.ts` where you can find tailwind related configs.
- `src/core/theme` where you can find [antd](https://ant.design/) related style overrides.

Other component relates styles are either written in a CSS file module inside the component folder, or we use tailwind directly on the element.

## Routing

We use [React Router](https://reactrouter.com/) to manage routing.

_For more details on how to use routing in the app, please refer to the **core concepts**_.

## Forms & Form Validation

We rely completely on [antd Form](https://ant.design/components/form) for building forms and form validation,
without needing to add any schema validation library such as _Zod_ or _Yup_.

## Build Tool

We use [Vite](https://vite.dev/) to build and locally serve the application.

## Testing

We use [Jest](https://jestjs.io/) to mainly test the utility functions added in `src/core/utils`.

## Storybook

We use [Storybook](https://storybook.js.org/) to build custom shareable components in isolation and to document them.

> **Note:** currently not all shared components have a story for it.

_For more details on how to use routing in the app, please refer to the **extra concepts**_.

## State Management

We do not use external state management, we only depend on:

- Component's local state using `useState` React hook.
- React [Context API](https://react.dev/learn/passing-data-deeply-with-context) for more complex nested states.
- We also use [nuqs](https://nuqs.47ng.com/) with filters and pagination states as we need to persist them in the url as query params.

## Fetching & Submitting Data

We use [React Query](https://tanstack.com/query/latest) to fetch, update and revalidate the data.

## Localization

We use [i18next](https://www.i18next.com/) and [react.i18next](https://react.i18next.com/) to handle switching between languages.
