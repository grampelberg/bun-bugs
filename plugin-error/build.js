import tailwindPlugin from 'bun-plugin-tailwind'

import examplePlugin from './plugin.ts'

await Bun.build({
  entrypoints: ['./index.ts'],
  // entrypoints: [path.join(FIXTURES_DIR, entrypoint)],
  // TODO: this should probably be on a per-test run basis
  outdir: 'dist',
  // target: target as Target,
  plugins: [examplePlugin, tailwindPlugin],
  sourcemap: true,
})
