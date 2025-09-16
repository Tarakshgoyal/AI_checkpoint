import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup/index.tsx'),
        content: resolve(__dirname, 'src/content/content.ts'),
        background: resolve(__dirname, 'src/background/background.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return '[name].css';
          }
          return '[name].[ext]';
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});