'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');


const dir = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
};

const styleBundle = new ExtractTextWebpackPlugin({
  filename: 'assets/[name].css',
  disable: true,
});


module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',

  // Input source files -> Output distribution files
  context: dir.src,
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './index.js',
  ],
  output: {
    publicPath: '/',
    filename: 'assets/[name].js',
  },

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?$/, // Matches .jsx and .js
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { sourceMap: true },
        }],
      },
      {
        test: /\.s?css$/, // Matches .scss and .css
        exclude: /node_modules/,
        use: styleBundle.extract({
          fallback: 'style-loader',
          use: [
            { // Load CSS *unique class names* into JS when imported
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: false,
                localIdentName: '[path][name]_[local]--[hash:base64:5]', // Makes class names unique
                camelCase: true,
                importLoaders: 2,
              },
            },
            { // Autoprefixer (display: -ms-flex;)
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                ident: 'postcss',
                plugins: () => [autoprefixer({ flexbox: 'no-2009' })],
              },
            },
            { // SCSS -> CSS
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [path.join(dir.src, 'styles')],
              },
            },
          ],
        }),
      },
    ],
  },

  plugins: [
    styleBundle, // CSS shit
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // Makes a popular date library WAY smaller
    new webpack.NamedModulesPlugin(), // I forget but I had good reason to add this
    // "Hot" reloading on save (let me know if you want to disable this)
    new webpack.HotModuleReplacementPlugin(),
    // Makes it so it errors if you `import foo from './foo';` then `import foo from './Foo';`
    new CaseSensitivePathsWebpackPlugin(),
    // Makes HTML page
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(dir.src, 'template.html'),
      minify: { collapseWhitespace: true },
    }),
  ],

  // HTTP server configuration
  devServer: {
    publicPath: '/',
    inline: true,
    hot: true,
    historyApiFallback: true,
    quiet: true,
    disableHostCheck: true,
    watchOptions: { ignored: /node_modules/ },
  },

  // I legit forget what this is for but it's something along the lines of making libs
  // that depend on NodeJS more browser compatible I think?
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
