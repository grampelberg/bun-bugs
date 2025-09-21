import type { BunPlugin, PluginBuilder } from 'bun'

const example: BunPlugin = {
  name: 'example',
  setup(build: PluginBuilder): void {
    build.onResolve({ filter: /.(js|ts)x?$/ }, async () => {})
  },
}

export default example
