# astro-endfield-theme

A bilingual (Chinese/English) blog theme for [Astro](https://astro.build), themed after **Arknights: Endfield**.

![](https://img.shields.io/badge/Astro-7.x-FF5A03?logo=astro)
![](https://img.shields.io/badge/bun-✔-FBF0DF?logo=bun)
![](https://img.shields.io/badge/license-MIT-green)

## Quick Start

1. Clone & Enter the repo:
```bash
git clone git@github.com:devLythen/astro-endfield-theme.git astro-blog
cd astro-blog
```

2. Install the dependencies (bun's example)
```bash
bun install
```

3. Do what you wanna do
```bash
bun run dev     # Start developing server
bun run build   # Build static pages
```

## Customize

Copy and edit `theme.toml.example` → `theme.toml`:

```toml
[site]
title = "My Blog"
lang = "zh-CN"

[about]
description = "wow another blog"
tagline = "OBSERVE · RECORD · CREATE"

# [build]
# outDir = "dist"
```

## Create Posts

Add `.md` files to `src/content/posts/`:

```yaml
---
title: My First Post
date: 1980-01-01
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

Theme files update automatically. Your config and posts are protected by `.gitignore` — no merge conflicts.

## License

[MIT License](./LICENSE)
