const config = require('./module-federation.config');
const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const webpackConfig = withModuleFederationPlugin(config);

module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    publicPath: 'http://localhost:4202/',
    scriptType: 'text/javascript',
  },
};
