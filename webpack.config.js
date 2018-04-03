const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: [
    './src/js/main.js',
    './src/js/docs.js',
    './src/scss/main.scss',
    './src/scss/docs.scss'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '_gh_pages')
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: path.resolve(__dirname, 'src/assets/fonts'),
        use: [{
          loader: 'file-loader',
          options: {
            limit: 100000,
            name: 'assets/fonts/[name].[ext]'
          }
        }],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new StyleLintPlugin(),
    new CopyWebpackPlugin([
      { 
        from: '**/*',
        to: 'assets/img' 
      }
    ], {
      context:  path.resolve(__dirname, 'src/assets/img')
    })
  ]
};