const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = env => {
  const theme = env.theme;

  return {
    entry: [
      path.resolve(__dirname, `src/js/${theme}.js`),
      path.resolve(__dirname, 'src/js/docs.js'),
      path.resolve(__dirname, `src/scss/${theme}.scss`),
      path.resolve(__dirname, 'src/scss/docs.scss')
    ],
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, '_gh_pages')
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: ['transform-class-properties', 'transform-object-rest-spread']
            }
          }
        },
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader', options: { sourceMap: true } // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, 'build/postcss.config.js'),
                },
                sourceMap: true
              }
            }, {
              loader: 'sass-loader', options: { sourceMap: true }
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
        filename: 'main.css'
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
  }
};