import { type BunPlugin, type PluginBuilder, plugin } from 'bun'

const example: BunPlugin = {
  name: 'example',
  setup(build: PluginBuilder): void {
    build.onLoad(
      {
        filter: /.(js|ts)x?$/,
      },
      async args => {
        return {
          contents: await Bun.file(args.path).text(),
          loader: args.loader,
        }
      },
    )
  },
}

if (Bun.env.PLUGIN) plugin(example)

export default example
