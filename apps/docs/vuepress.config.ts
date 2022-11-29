import { defineUserConfig, defaultTheme } from 'vuepress';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
// @ts-ignore
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
// @ts-ignore
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Chat',
  description: 'Powerful all in one embedded chat app',
  dest: '../../dist/apps/docs',
  base: process.env.DOCS_BASE ? `/${process.env.DOCS_BASE}/` : '/',
  plugins: [searchPlugin({}), prismjsPlugin({}), nprogressPlugin()],
  port: 4202,
  theme: defaultTheme({
    logo: '/chat.png',
  }),
});
