# astro-endfield-theme

A bilingual (Chinese/English) blog theme for [Astro](https://astro.build), themed after **Arknights: Endfield** — featuring bold yellow accents and smooth page transitions.

> **Endfield** — the frontier where code meets clarity.

![](https://img.shields.io/badge/Astro-7.x-FF5A03?logo=astro)
![](https://img.shields.io/badge/bun-✔-FBF0DF?logo=bun)
![](https://img.shields.io/badge/license-MIT-green)

## Quick Start

```bash
bun create astro@latest my-blog -- --template devLythen/astro-endfield-theme
cd my-blog
cp astro.config.example.mjs astro.config.mjs
bun run dev
```

## Customize

Edit `src/theme.config.ts`:

```ts
export default {
  site: {
    title: "My Blog",
    lang: "zh-CN",
  },
  about: {
    description: "这里是你的博客。",
    tagline: "OBSERVE · RECORD · CREATE",
  },
};
```

Optional: edit `astro.config.mjs` to set a custom `outDir` for build output.

## Create Posts

Add `.md` files to `src/content/posts/`:

```yaml
---
title: My First Post
date: 2026-07-17
description: A short summary
tags: [tag1, tag2]
draft: false
---

Your content here.
```

## Update

```bash
git pull origin main
```

Only theme files update. Your config and posts are excluded via `.gitignore` — no conflicts, ever.

## Features

- Page transitions: slide-in → fade-out → content fade-in
- KaTeX math rendering
- Shiki syntax highlighting
- Bilingual title decor
- Tag collection
- Responsive sidebar
- Bfcache-aware back button

## License

MIT
