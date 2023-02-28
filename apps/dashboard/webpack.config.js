const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
const webpackConfig = withModuleFederation(config);
module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    publicPath: 'http://localhost:4201/',
    scriptType: 'text/javascript',
  },
};
