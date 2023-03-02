const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const webpackConfig = withModuleFederationPlugin({
  name: 'dashboard',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './apps/dashboard/src/app/dashboard/dashboard.module.ts',
  },
});

module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    // publicPath: 'http://localhost:4201/',
    // scriptType: 'text/javascript',
  },
};
