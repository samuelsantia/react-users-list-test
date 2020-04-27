module.exports = {
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-docs',
      option: {
        configureJSX: true
      }
    }
  ],
  stories: ['../src/**/*.stories.js']
};
