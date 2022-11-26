import { mergeConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths';
import baseConfig from '../../vite.config';

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [
      react(),
      ViteTsConfigPathsPlugin({
        root: '../../',
        projects: ['tsconfig.base.json'],
      }),
    ],
  })
);
