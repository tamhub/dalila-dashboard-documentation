---
sidebar_position: 2
---

# Architecture

Let's explore the **app's high level architecture**.

## Folder Structure

```math
📁
├── 📁 public/
│  └── mockServiceWorker.js - do not modify
└── 📁 src/
   ├── 📁 core - contains all shared and global configurations/
   │  ├── 📁 assets - icons, images, etc
   │  ├── 📁 components - react components and their stories and styling
   │  ├── 📁 constants - error messages and router routes
   │  ├── 📁 hooks - react hooks used across multiple pages
   │  ├── 📁 mocks - mswjs mocks and Jest testing mocks
   │  ├── 📁 openapi - automatically generated openapi models and services (on demand)
   │  │  ├── 📁 models - API related types.
   │  │  ├── 📁 services - feature based classes to manage the API requests related to this feature.
   │  ├── 📁 providers - react contexts and their respective providers
   │  ├── 📁 styles - global styles, tokens, etc
   │  ├── 📁 lang - self explanatory
   │  ├── 📁 queries - consume the endpionts in a specific service in a corresponding react query file
   │  ├── 📁 types - custom types only! api types as well in case openapi codegen is disabled
   │  └── 📁 utils - self explanatory
   └── 📁 pages - each page can have sub-directories with the same structure as ~/core/.
```

## App Entry Point

The entrypoint for the app is located at `/src/main.tsx`.
