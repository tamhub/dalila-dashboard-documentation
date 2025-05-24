# AuditLogsFilters

A React component for filtering audit logs by target type, action type, and date range. Used in the admin dashboard for filtering logs related to admins and trips.

**Props:**

- `filters`: Current filter values.
- `onFiltersChange`: Callback to update filters.

**Features:**

- Select target type (Admin/Trip)
- Select one or more action types
- Date range picker

**Dependencies:** Ant Design, dayjs, i18next

**Location:** `src/core/components/audit-logs/filters.tsx`
