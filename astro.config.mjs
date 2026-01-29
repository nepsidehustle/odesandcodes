import { defineConfig } from 'astro/config';

export default defineConfig({
  // This is the "Switch" that prevents 404s on your AWS IP
  base: process.env.DEPLOY_TARGET === 'caddy' ? '/odes' : '/',
  outDir: './dist',
});