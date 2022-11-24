const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  async viteFinal(config, { configType }) {
    if (rootMain.viteFinal) {
      config = await rootMain.viteFinal(config, { configType });
    }

    // customize the Vite config here
    return config;
  },
};
