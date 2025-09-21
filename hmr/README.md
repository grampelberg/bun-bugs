# `onResolve` breaks HMR

```
HMR=true bun run index.ts
frontend error: Failed to load bundled module './index.ts'. This is not a dynamic import, and therefore is a bug in Bun's bundler.
      at UY
      at m
      at lY
      at m
      at unknown
      at unknown
    from browser tab http://localhost:3000/
```

Note: unset `HMR` and it works fine.
