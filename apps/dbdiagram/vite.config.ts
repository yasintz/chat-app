import { mergeConfig } from 'vite';
import baseConfig from '../../vite.config';
import react from '@vitejs/plugin-react';
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths';

export default mergeConfig(baseConfig, {
  plugins: [
    react(),
    ViteTsConfigPathsPlugin({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),
  ],
});
