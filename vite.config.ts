/// <reference types="vitest"/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // plugins: [
      // ['@swc-jotai/debug-label', {}],
      // ['@swc-jotai/react-refresh', {}]
      // ]
    }),
    tsconfigPaths()
  ],
  test: {
    environment: 'jsdom'
  },
  preview: {
    headers: {
      'Cache-Control': 'public,  max-age=604800, stale-while-revalidate=86400'
    }
  }
})
