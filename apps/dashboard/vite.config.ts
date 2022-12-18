import { mergeConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths';
import baseConfig from '../../vite.config';
import svgr from 'vite-plugin-svgr';

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [
      react(),
      svgr(),
      ViteTsConfigPathsPlugin({
        root: '../../',
        projects: ['tsconfig.base.json'],
      }),
    ],
  })
);
