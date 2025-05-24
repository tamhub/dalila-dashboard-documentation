---
sidebar_position: 2
---

# API Integration

Fetching and submitting data

## Tooling

We use [React Query](https://tanstack.com/query/latest) to fetch, update and revalidate the data.

## API Routes

You can find a list of all the API endpoints that we call in our app at `/src/core/constants/api-routes.ts` with each route having its path and method.

### Special Cases

:::warning VisitSaudi Endpoints
Not all requests are sent to our backend, but we may request resources from VisitSaudi Directly.
:::

**Examples on this:**

- The DMC trips (also known as experiences) used in the informative pages.

In this case we use a **[vite proxy](https://vite.dev/config/server-options#server-proxy) in development** to communicate with VisitSaudi endpoints without getting [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) errors, but **in production** we need VisitSaudi to add the origin to the allowed list.

## Models

- Models are types related to API integration, like response type, request parameters types and form data types.
- You can find the models at `/src/core/openapi/models`.

## Services

- Services are classes to wrap API methods categorized by feature.
- You can find the services at `/src/core/openapi/services`.

## Fetching Data

### Queries

- We use React Query's `useQuery` for fetching data.
- You can find the queries categorized by feature at `/src/core/queries`.

### Utility Fetch Wrapper

- When fetching or submitting data we need to handle things like, authentication tokens, unauthorized & unauthenticated requests redirect, language headers and more. That's why we added a utility fetch function that works as a wrapper around the fetch API method.
- You can find the fetch utility function in `/src/core/utils/network.ts`.

### Fetching Steps

To fetch data you need to:

1. Define the data types in the models folder. The types are defined for:

   - The expected response type.
   - Any query parameters expected to be sent to the endpoint using query params (like filters, pagination, sorting, etc.).
  
   ```ts title="src/core/openapi/models/Admin.ts"
   export interface Admin {
      ...
   }
   ```

2. Add the api request path to the [API_ROUTES](#api-routes).

   ```ts title="src/core/constants/api-routes.ts"
    export const API_ROUTES = {
        getAdmins: {
        method: "GET",
        path: `${API_URL}/admins`,
      }
    }
   ```

3. Add a new method to your service to request the resource using the [utility fetch wrapper](#utility-fetch-wrapper) and pass any query params to the endpoint.

    ```ts title="src/core/openapi/services/AdminsService.ts"
    import type {AdminsResponse} from "~/core/openapi/models/Admin";
    import { fetch } from "~/core/utils/network";
    import { API_ROUTES } from "~/core/constants/api-routes";
      
    export class AdminsService {
      public static getAdmins() {
        return fetch(url, {
          method: API_ROUTES.getAdmins.method,
        })
        .then((res) => res as AdminsResponse)
        .catch((err) => {});
       }
     }
     ```

4. Call that method inside your [query](#queries).

   ```ts title="src/core/queries/admins.ts"
    export function useGetAdminsQuery(
      options?: QueryOptions,
    ): UseQueryResult<AdminsResponse> {
    return useQuery({
       queryKey: ["admins"],
       queryFn: () => {
         return AdminsService.getAdmins(params)
            .then((res) => res)
            .catch((err) => {
             message.error(err.message);
            });
       },
      ...options,
    });
   }
   ```

5. Call your query hook inside your page or component.
  
   ```tsx title="src/core/pages/admins/index.tsx"
   export default function AdminsPage {
      const {data, error, isFetching} = useGetAdminsQuery();

      return (
        <main>
          <h1>Admins List</h1>
          // Use your data to show the admins list
        </main>
     )
   }
   ```

## Submitting Data

### Mutations

We use React Query's `useMutation` hook to submit the data and invalidate any stale data using the query key.

```ts title="example: RevokeAdminComponent.tsx"
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "~/core/providers/query";
import { AdminsService } from "~/core/openapi/services/AdminsService";

function RevokeAdminComponent(adminId:string) {
  const { mutate: revokeAdmin } = useMutation({
    mutationFn: () => {
      // Call the service method that's responsible for the mutation 
      return AdminsService.revokeAdmin(adminId)
       .then(() => {
        // Invalidating any fetched data that may be affected with this action
        queryClient.invalidateQueries({ queryKey: ["admin", adminId] });
        queryClient.invalidateQueries({ queryKey: ["admins"] });
        queryClient.invalidateQueries({ queryKey: ["audit-logs"] });
      })
       .catch((err) => {
        message.error(err.message);
      })
   },
 });

 return <button onClick={revokeAdmin}>Revoke Admin</button>
}
```

### Showing Form Submit Errors

There is a ready to use util method at `/src/core/utils/form` called `setFormApiErrors` used to automatically set the errors returned from the backend to the [antd Form](https://ant.design/components/form).

```ts title="example: AdminForm.tsx"
import { useEffect } from "react";
import { Form } from "antd";
import { type FormApiError, setFormApiErrors } from "~/core/utils/form";

interface Props {
  apiErrors?: FormApiError; // Passed api errors returned from the backend
}

function AdminForm({apiErrors}:Props) {
  const [form] = Form.useForm();

  useEffect(() => {
    setFormApiErrors(form, apiErrors);
  }, [apiErrors]);

  return (
    <Form>
      // Form inputs
    </Form>
  );
}
```

## OpenAPI

:::danger Deprecated
OpenAPI is no longer used to generate models and services automatically.
:::

- [OpenAPI](https://www.openapis.org/) was configured at the early stages of the project to generate models and services automatically.
- It was abandoned later on, as we wanted to have more control over the models and services in the project.
