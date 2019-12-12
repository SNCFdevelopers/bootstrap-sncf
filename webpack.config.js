const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const buildBundle = require('./build/build-bundle');
const buildDist = require('./build/build-dist');
const buildDocs = require('./build/build-doc');
const srcPath = path.resolve(__dirname, 'src');

function getFilename(name, ext, isProduction) {
  if (isProduction) {
    return `${name}.min.${ext}`;
  }

  return `${name}.${ext}`;
}

module.exports = env => {
  const theme = env.theme;
  const production = env.production;
  const documentation = env.documentation;
  const bundle = env.bundle;

  let entry = bundle ? buildBundle.getEntry(srcPath) : buildDist.getEntry(srcPath, theme);
  let outputPath = path.resolve(__dirname, buildDist.outputDir);

  if (documentation && !bundle) {
    entry = buildDocs.mergeEntry(entry, srcPath, theme);
    outputPath = path.resolve(__dirname, buildDocs.outputDir);
  }

  const plugins = [
    new MiniCssExtractPlugin({
      moduleFilename: ({ name }) => {
        return getFilename(name, 'css', production);
      },
    }),
    new StyleLintPlugin(),
    new CopyWebpackPlugin([
      { 
        from: '**/*',
        to: 'assets/img' 
      }
    ], {
      context: path.resolve(__dirname, 'src/assets/img')
    }),
  ]
  
  if (production) {
    plugins.push(new RemovePlugin({
      /**
       * After compilation removes `js` files in `css` folder.
       */
      after: {
        test: [
          {
            folder: path.resolve(outputPath, 'css'),
            method: (filePath) => {
              return new RegExp(/\.js*$|\.js.map*$/, 'm').test(filePath);
            }
          }
        ]
      }
    }));
  }

  if (bundle) {
    plugins.push(
      new webpack.ProvidePlugin({
        jQuery: 'jquery'
      })
    );
  }

  return {
    entry,
    output: {
      filename: (chunkData) => {
        return getFilename(chunkData.chunk.name, 'js', production);
      },
      path: outputPath,
      libraryTarget: bundle ? 'commonjs2' : 'umd'
    },
    devtool: production ? 'none' : 'source-map',
    mode: production ? 'production' : 'development',
    externals: bundle ? buildBundle.getExternals() : [],
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
              presets: [
                [
                  'env',
                  {
                    targets: {
                      'ie': '11'
                    }
                  }
                ]
              ],
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
              name: 'assets/fonts/[name].[ext]',
              publicPath: '../'
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
    plugins
  }
};
