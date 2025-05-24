# ApproveTrip

Button component to approve a trip. Triggers a mutation and updates queries on success.

**Props:**

- `tripId`: Trip ID

**Features:**

- Approve trip via API
- Shows loading state
- Success/error messages

**Dependencies:** Ant Design, react-query, i18next

**Location:** `src/core/components/trip-actions/approve.tsx`

## RejectTrip

Button and modal form to reject a trip, requiring a reason. Triggers a mutation and updates queries on success.

**Props:**

- `tripId`: Trip ID

**Features:**

- Modal with reason input
- Reject trip via API
- Shows loading state
- Success/error messages

**Dependencies:** Ant Design, react-query, i18next

**Location:** `src/core/components/trip-actions/reject.tsx`

## ApproveCancellation

Button and confirmation modal to approve trip cancellation.

**Props:**

- `tripId`: Trip ID (number)

**Features:**

- Confirmation modal
- Approve cancellation via API
- Shows loading state
- Success/error messages

**Dependencies:** Ant Design, react-query, i18next

**Location:** `src/core/components/trip-actions/approve-cancellation.tsx`

## RejectCancellation

Button and modal form to reject trip cancellation, requiring a reason.

**Props:**

- `tripId`: Trip ID (number)

**Features:**

- Modal with reason input
- Reject cancellation via API
- Shows loading state
- Success/error messages

**Dependencies:** Ant Design, react-query, i18next

**Location:** `src/core/components/trip-actions/reject-cancellation.tsx`
