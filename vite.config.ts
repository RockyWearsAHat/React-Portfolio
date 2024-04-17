import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import express from './plugins/express-vite';

const env = loadEnv('', process.cwd(), '');
console.log(env.MAILJET_API, env.MAILJET_SECRET);

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.MAILJET_API_KEY': JSON.stringify(env.MAILJET_API),
    'process.env.MAILJET_SECRET_KEY': JSON.stringify(env.MAILJET_SECRET),
  },
  plugins: [react(), express('server/server.ts')],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
});
