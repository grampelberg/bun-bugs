import { type ReactElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

const elem: HTMLElement | null = document.getElementById('root')

if (!elem) {
  throw new Error('Root element not found')
}

const app: ReactElement = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem))

  root.render(app)
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app)
}
