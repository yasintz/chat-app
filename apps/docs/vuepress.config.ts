import { defineUserConfig } from 'vuepress';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
// @ts-ignore
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
// @ts-ignore
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',
  dest: '../../dist/apps/docs',
  base: process.env.DOCS_BASE ? `/${process.env.DOCS_BASE}/` : '/',
  plugins: [searchPlugin({}), prismjsPlugin({}), nprogressPlugin()],
});
