import { type BunPlugin, type PluginBuilder, plugin } from 'bun'

const example: BunPlugin = {
  name: 'example',
  setup(build: PluginBuilder): void {
    build.onResolve(
      {
        filter: /.(js|ts)x?$/,
      },
      async ({ path }) => {
        return {
          path,
        }
      },
    )
  },
}

plugin(example)

export default example
