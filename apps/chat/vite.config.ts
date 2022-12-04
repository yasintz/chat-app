import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths';
import baseConfig from '../../vite.config';
import svgr from 'vite-plugin-svgr';

export default mergeConfig(baseConfig, {
  plugins: [
    react(),
    svgr(),
    ViteTsConfigPathsPlugin({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),
  ],
});
