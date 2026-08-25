# Jimwell Marigmen Portfolio

The source for [marigwell.github.io](https://marigwell.github.io/), generated in v0 and built with Next.js.

## Local development

Requirements:

- Node.js 20 or newer
- pnpm 10

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

Next.js writes the static site to `out/`. The repository's GitHub Pages workflow builds and deploys that directory whenever `main` changes.

The repository is the root user site (`marigwell.github.io`), so no `basePath` or `assetPrefix` is required.
