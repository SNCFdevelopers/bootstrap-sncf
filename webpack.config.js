const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = env => {
  const theme = env.theme;
  const thememode = env.darkmode ? 'dark' : 'light';
  const production = env.production;
  const willMinify = production ? '.min' : '';
  const documentation = env.documentation;
  //const externals = ['flatpickr','jquery','popper.js','chart.js'];
  const entry = {
    normal: [
        path.resolve(__dirname, `src/js/${theme}.js`),
        path.resolve(__dirname, `src/scss/${thememode}-${theme}.scss`)
    ],
    darkmode: [
        path.resolve(__dirname, `src/scss/dark-${theme}.scss`)
    ]
  };
  let outputPath = path.resolve(__dirname, 'dist');

  if (documentation) {
    entry.normal.push(path.resolve(__dirname, 'src/js/docs.js'));
    entry.normal.push(path.resolve(__dirname, `src/js/docs/search-${theme}.js`));
    entry.normal.push(path.resolve(__dirname, `src/scss/${thememode}-docs-${theme}.scss`));
    entry.darkmode.push(path.resolve(__dirname, `src/scss/dark-docs-${theme}.scss`));
    outputPath = path.resolve(__dirname, '_gh_pages');
  }

  return {
    entry,
    output: {
      filename: (chunkData) => {
        return chunkData.chunk.name === 'normal' ? `bootstrap-sncf${willMinify}.js` : '.generated-by-webpack'
      },
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
        moduleFilename: ({ name }) => (name === 'normal') ? `bootstrap-sncf${willMinify}.css` : `bootstrap-sncf.darkmode${willMinify}.css`
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
