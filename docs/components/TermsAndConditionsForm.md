# TermsAndConditionsForm

Form for creating or editing terms and conditions, supporting English and Arabic content and an effective date.

**Props:**

- `submitBtn`: Custom submit button (optional)
- `onSubmit`: Submit handler
- `isReadOnly`: Read-only mode (optional)
- `apiErrors`: API error object (optional)
- `defaultValues`: Default form values (optional)

**Features:**

- Rich text editors for English/Arabic
- Effective date picker (future date validation)
- Handles API errors

**Dependencies:** Ant Design, dayjs, DOMPurify, custom Editor/DatePicker

**Location:** `src/core/components/terms-and-conditions-form/index.tsx`
