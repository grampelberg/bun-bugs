import { type Server, serve } from 'bun'

import index from './index.html'

const server: Server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    '/*': index,
  },

  development: {
    // Enable browser hot reloading in development
    hmr: 'HMR' in Bun.env,

    // Echo console logs from the browser to the server
    console: true,
  },
})

console.log(`🚀 Server running at ${server.url}`)
