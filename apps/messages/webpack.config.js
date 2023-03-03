/* const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { LoaderOptionsPlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { dependencies } = require('../../package.json');
const path = require('path');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.entry = ['apps/messages/src/index.html', 'apps/messages/src/main.ts'];
  config.output = {
    publicPath: 'auto',
    path: path.resolve(__dirname, '../../dist/apps/messages'),
  };

  config.experiments = {
    outputModule: true,
  };
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'messages',
      library: { type: 'var', name: 'messages' },
      filename: 'remoteEntry.js',
      exposes: {
        './messages-wc': 'apps/messages/src/bootstrap.ts',
      },
      shared: {
        ...dependencies,
      },
    }),
    new VueLoaderPlugin(),
    new LoaderOptionsPlugin({
      options: {
        postcss: [require('autoprefixer')],
      },
    })
  );

  // important workaround !!!
  config.optimization.runtimeChunk = false;
  // config.devServer.headers = { 'Access-Control-Allow-Origin': '*' };
  config.resolve.extensions = ['.vue', '.js', '.ts'];
  config.module.rules = [
    {
      test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
      use: [{ loader: 'file-loader' }],
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: ['file-loader'],
    },
    {
      test: /\.vue$/,
      use: 'vue-loader',
    },
    {
      test: /\.html/,
      use: [{ loader: 'file-loader?name=[name].[ext]' }],
    },
    {
      test: /\.ts$/,
      use: ['ts-loader'],
    },
    {
      test: /\.scss|\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ];
  console.dir(config);
  return config;
}; */
/* const { composePlugins, withNx } = require('@nrwl/webpack');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const { dependencies } = require('../../package.json');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = composePlugins(withNx(), (config, { options, context }) => {
  // customize webpack config here
  config.context = process.cwd();
  config.entry = [
    '/apps/messages/src/index.html',
    '/apps/messages/src/main.ts',
  ];
  config.output = {
    publicPath: 'auto',
    path: path.resolve(__dirname, '../../dist/apps/messages'),
  };
  config.experiments = {
    outputModule: true,
  };

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'messages',
      library: { type: 'var', name: 'messages' },
      filename: 'remoteEntry.js',
      exposes: {
        './messages-wc': 'apps/messages/src/bootstrap.ts',
      },
      shared: {
        ...dependencies,
      },
    }),
    new VueLoaderPlugin()
  );

  // important workaround !!!
  config.optimization.runtimeChunk = false;
  // config.devServer.headers = { 'Access-Control-Allow-Origin': '*' };
  config.resolve.extensions = ['.vue', '.js', '.ts'];
  config.module.rules = [
    {
      test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
      use: [{ loader: 'file-loader' }],
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: ['file-loader'],
    },
    {
      test: /\.vue$/,
      use: ['vue-loader'],
      exclude: /node_modules/,
    },
    {
      test: /\.html/,
      use: [{ loader: 'file-loader?name=[name].[ext]' }],
    },
    {
      test: /\.ts$/,
      use: ['ts-loader'],
    },
    {
      test: /\.scss|\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ];

  console.log(config);
  return config;
});
 */

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const { dependencies } = require('../../package.json');
const { LoaderOptionsPlugin } = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (config, context) => {
  config.context = process.cwd();
  config.entry = ['apps/messages/src/index.html', 'apps/messages/src/main.ts'];
  config.output = {
    publicPath: 'auto',
    path: path.resolve(__dirname, '../../dist/apps/messages'),
    // filename: '[bundle].js',
    uniqueName: 'messages_microapp',
    // chunkFilename: '[name].js',
  };

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'messages_microapp',
      library: { type: 'var', name: 'messages_microapp' },
      filename: 'remoteEntry.js',
      exposes: {
        './messages-wc': 'apps/messages/src/bootstrap.ts',
      },
      shared: {
        ...dependencies,
      },
    }),
    new VueLoaderPlugin(),
    new LoaderOptionsPlugin({
      options: {
        postcss: [require('autoprefixer')],
      },
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'style.css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
  );

  // important workaround !!!
  config.optimization = {
    runtimeChunk: false,
  };
  // config.devServer.headers = { 'Access-Control-Allow-Origin': '*' };
  config.resolve.extensions = ['.vue', '.js', '.ts', '.css'];
  config.module.rules = [
    {
      test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
      use: [{ loader: 'file-loader' }],
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: ['file-loader'],
    },
    {
      test: /\.vue$/,
      use: 'vue-loader',
    },
    {
      test: /\.html/,
      use: [{ loader: 'file-loader?name=[name].[ext]' }],
    },
    {
      test: /\.ts$/,
      use: ['ts-loader'],
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'postcss-loader',
      ],
    },
  ];

  return config;
};
