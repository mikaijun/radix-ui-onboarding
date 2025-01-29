import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@atoms/': path.join(__dirname, 'src/components/atoms/'),
      '@molecules/': path.join(__dirname, 'src/components/molecules/'),
    },
  },
})
