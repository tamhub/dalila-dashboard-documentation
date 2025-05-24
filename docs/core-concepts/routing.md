---
sidebar_position: 1
---

# Routing

We use [React Router](https://reactrouter.com/) to manage routing.

## Setup

You can find the routing entry point in `src/core/providers/router.tsx` whe we configure the `Browser Router` and pass the created routes.

## Routes

The `routes.ts` file is where we configure each route.

```ts title="src/core/constants/routes.ts" {1,8,15}
export const AUTH_ROUTES = {
 login: {
  path: "/login",
  Component: conditionalRedirect(Login, "no-auth"),
 },
};

export const DASHBOARD_LAYOUT = {
 key: "mainDashboard",
 path: "/dashboard",
 Component: Layout,
 ErrorBoundary,
};

export const DASHBOARD_ROUTES = {
  tags: {
   key: "tags",
   path: "/dashboard/tags",
   Component: conditionalRedirect(Tags, "auth"),
  }
}
```

| Segment            | Role                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `AUTH_ROUTES`      | Routes mainly used for non authenticated admins                                                                                |
| `DASHBOARD_LAYOUT` | The layout wrapping the dashboard (contains navbar, footer, etc.)                                                              |
| `DASHBOARD_ROUTES` | Dashboard routes mainly for authenticated admins, and these routes' url will be prefixed by **/dashboard** then the route path |

## Page Access Level

As shown the previous examples, you can pass the access level along side your page to the `conditionalRedirect` utility function.

```ts title="src/core/constants/routes.ts" {4,11}
export const AUTH_ROUTES = {
 login: {
  path: "/login",
  Component: conditionalRedirect(Login, "no-auth"),
 },
};

export const DASHBOARD_ROUTES = {
  tags: {
   key: "tags",
   path: "/dashboard/tags",
   Component: conditionalRedirect(Tags, "auth"),
  }
}
```

The following **access values** are accepted:

| Name          | Description                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `no-auth`     | Not authenticated admins only can visit this page, otherwise redirect to the dashboard main page                         |
| `auth`        | Only authenticated admins can access this page (whatever the role of the admin is), otherwise redirect to the login page |
| `super-admin` | Only super admins are allowed to visit this page, otherwise force logout and redirect to the login page                  |
| `ignore`      | Ignore checking the auth status altogether (it's like allowing anyone)                                                   |

## Create a New Page

To create a new page you need to:

1. Add your page file in the `src/core/pages` folder.
2. Import your page component into `src/core/constants/routes.ts`
3. Decide whether the page is an `AUTH` or `DASHBOARD` page.
4. Add your page's configuration object as shown for the other pages.
5. Specify the [page access level](#page-access-level).
