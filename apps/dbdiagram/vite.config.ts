import { mergeConfig } from 'vite';
import baseConfig from '../../vite.config';
import ViteTsConfigPathsPlugin from 'vite-tsconfig-paths';
// @ts-ignore
import veauryVitePlugins from 'veaury/vite/index.js';

export default mergeConfig(baseConfig, {
  plugins: [
    veauryVitePlugins({
      type: 'react',
      // Configuration of @vitejs/plugin-vue
      // vueOptions: {...},
      // Configuration of @vitejs/plugin-react
      // reactOptions: {...},
      // Configuration of @vitejs/plugin-vue-jsx
      // vueJsxOptions: {...}
    }),
    ViteTsConfigPathsPlugin({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),


  ],
});
