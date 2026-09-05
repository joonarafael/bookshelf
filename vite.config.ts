import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { booksFromYamlPlugin } from './books-from-yaml-plugin.ts';

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => ({
    base: command === 'serve' && mode === 'development' ? '/' : '/bookshelf/',
    plugins: [booksFromYamlPlugin(), react(), babel({ presets: [reactCompilerPreset()] })],
}));
