// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

let theme = { build: {} };
try { theme = (await import('./src/theme.config')).default; } catch {}

export default defineConfig({
  integrations: [react()],
  outDir: theme.build.outDir || undefined,
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: { theme: 'github-light' },
  },
});
