# `onResolve` breaks HMR

```bash
HMR=true bun run --hot serve.ts
🚀 Server running at http://localhost:3000/
error: Could not resolve: "react-refresh/runtime/index.js". Maybe you need to "bun install"?
    at .../react-refresh/App.tsx
```
