const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const webpackConfig = withModuleFederationPlugin({
  remotes: {},

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});

module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    // publicPath: 'http://localhost:4200/',
    // scriptType: 'text/javascript',
  },
};
