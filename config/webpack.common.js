const paths = require('./paths')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    main: paths.src + '/index.js',
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          'vue-style-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true, importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack - Vue - Starter',
    //   favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store', '*.idea'],
          },
        },
      ],
    }),
  ],
}