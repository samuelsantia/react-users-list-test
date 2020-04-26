module.exports = {
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      option: {
        configureJSX: true
      }
    }
  ],
  stories: ['../src/**/*.stories.js']
};
