import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react() as any],
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/test/setup.ts'],
        globals: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@lib': path.resolve(__dirname, 'src/lib'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@types': path.resolve(__dirname, 'src/types'),
        },
    },
});
