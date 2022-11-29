└─ docs
├─ guide
│ ├─ getting-started.md
│ └─ README.md
├─ contributing.md
└─ README.md

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

```sh:no-line
pnpm nx serve docs
```
