module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    config.root = process.cwd();

    return config;
  },
};
