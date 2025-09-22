# Bun can't bundle `isomorphic-ws` when used two ways

```
bun run serve.ts
```

Load http://localhost:3000 in the browser and see the error:

```
browser.js:4 Uncaught Error: ws does not work in the browser. Browser clients must use the native WebSocket object
```
