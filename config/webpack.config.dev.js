const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const path = require('path')
const getClientEnvironment = require('./env')
const paths = require('./paths')

const publicPath = '/'
const publicUrl = ''
const env = getClientEnvironment(publicUrl)

module.exports = {
  devtool: 'eval-source-map',
  server: {
    port: 3000,
    url: 'localhost',
    hot: true,
    historyApiFallback: true,
  },
  entry: [
    require.resolve('./polyfills'),
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    paths.appIndexJs,
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath,
  },
  resolve: {
    fallback: paths.nodePaths,
    extensions: ['.js', '.json', '.jsx', ''],
    alias: {
      'react-native': 'react-native-web',
      '~components': path.resolve(__dirname, '../src/components'),
      '~ressources': path.resolve(__dirname, '../src/ressources'),
      '~containers': path.resolve(__dirname, '../src/containers'),
      '~src': path.resolve(__dirname, '../src'),
      '@theme': path.resolve(__dirname, '../src/ressources/theme'),
    },
  },
  progress: true,
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.appSrc,
      },
    ],
    loaders: [
      {
        exclude: [/\.html$/, /\.(js|jsx)(\?.*)?$/, /\.css$/, /\.json$/, /\.svg$/],
        loader: 'url',
        query: { limit: 10000, name: 'static/media/[name].[hash:8].[ext]' },
      },
      { test: /\.(js|jsx)$/, include: paths.appSrc, loader: 'babel', query: { cacheDirectory: true } },
      { test: /\.css$/, loader: 'style!css?importLoaders=1!postcss' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.svg$/, loader: 'file', query: { name: 'static/media/[name].[hash:8].[ext]' } },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/font-woff', name: 'static/fonts/[name]/[name].[ext]' },
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/font-woff', name: 'static/fonts/[name]/[name].[ext]' },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/octet-stream', name: 'static/fonts/[name]/[name].[ext]' },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
        query: { name: 'static/fonts/[name]/[name].[ext]' },
      },
    ],
  },
  postcss: () => {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ],
      }),
    ]
  },
  plugins: [
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.DefinePlugin(env.stringified),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}
