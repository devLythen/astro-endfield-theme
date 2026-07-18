// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'smol-toml';
import react from '@astrojs/react';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

let theme = {};
try {
  theme = parse(readFileSync(resolve(process.cwd(), 'theme.toml'), 'utf-8'));
} catch {}

export default defineConfig({
  integrations: [react()],
  outDir: theme.build?.outDir || undefined,
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: { theme: 'github-light' },
  },
});
