const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = env => {
  const theme = env.theme;
  const mode = env.mode;
  const production = env.production;
  const documentation = env.documentation;
  //const externals = ['flatpickr','jquery','popper.js','chart.js'];
  const entry = [
    path.resolve(__dirname, `src/js/${theme}.js`),
    path.resolve(__dirname, `src/scss/${mode}-${theme}.scss`)
  ];
  let outputPath = path.resolve(__dirname, 'dist');

  if (documentation) {
    entry.push(path.resolve(__dirname, 'src/js/docs.js'));
    entry.push(path.resolve(__dirname, `src/js/docs/search-${theme}.js`));
    entry.push(path.resolve(__dirname, `src/scss/${mode}-docs-${theme}.scss`));
    outputPath = path.resolve(__dirname, '_gh_pages');
  }

  return {
    entry,
    output: {
      filename: 'bootstrap-sncf.min.js',
      path: outputPath
    },
    devtool: production ? 'none' : 'source-map',
    mode: production ? 'production' : 'development',
    externals: (typeof externals === 'undefined') ? '' : externals,
    module: {
      
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
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
        },
        {
          test: require.resolve('jquery'),
          use: [{
            loader: 'expose-loader',
            options: '$'
          },{
            loader: 'expose-loader',
            options: 'jQuery'
          },{
            loader: 'expose-loader',
            options: 'window.jQuery'
          },{
            loader: 'expose-loader',
            options: 'window.$'
          }]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'bootstrap-sncf.min.css'
      }),
      new StyleLintPlugin(),
      new CopyWebpackPlugin([
        { 
          from: '**/*',
          to: 'assets/img' 
        }
      ], {
        context: path.resolve(__dirname, 'src/assets/img')
      })
    ]
  }
};
