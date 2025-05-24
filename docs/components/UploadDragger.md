# UploadDragger

A drag-and-drop file uploader component supporting images and PDFs. Handles file validation, upload, and preview.

**Props:**

- `initialUrl`: Initial file URL (optional)
- `onUrlChange`: Callback when file URL changes
- `filedName`: Form field name (optional)
- `type`: 'image' or 'pdf' (default: 'image')
- `maxSize`: Max file size in MB (default: 2)

**Features:**

- Drag-and-drop upload
- File type/size validation
- Image preview or PDF iframe

**Dependencies:** Ant Design, i18next

**Location:** `src/core/components/upload-dragger/index.tsx`
