// const config = require('./module-federation.config');
const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

const webpackConfig = withModuleFederationPlugin({
  name: 'heroes',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': 'apps/heroes/src/app/heroes/heroes.module.ts',
  },
});

module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    // publicPath: 'http://localhost:4202/',
    // scriptType: 'text/javascript',
  },
};
