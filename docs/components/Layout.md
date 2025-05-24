# Layout

The main layout component for the dashboard, wrapping all pages and rendering navigation, headers, and content. Handles sidebar, mobile drawer, and user info.

**Props:**

- `children`: Page content

**Features:**

- Sidebar navigation (with super admin sections)
- Mobile drawer for small screens
- Header with user info, notifications, language switch
- Handles logout

**Dependencies:** Ant Design, React Router, i18next, custom hooks

**Location:** `src/core/components/layout/layout.tsx`
