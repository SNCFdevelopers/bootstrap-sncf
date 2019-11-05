const path = require('path');

const getEntry = (srcPath, theme) => ({
  'js/bootstrap-sncf': [path.resolve(srcPath, `js/${theme}.js`)],
  'css/bootstrap-sncf': [path.resolve(srcPath, `scss/site-${theme}.scss`)],
  'css/bootstrap-sncf.dark': [path.resolve(srcPath, `scss/site-${theme}-dark.scss`)],
});

const getRemoveIncludeFiles = (production) => {
  return [
    `css/bootstrap-sncf${production ? '.min' : ''}.js`,
    `css/bootstrap-sncf.dark${production ? '.min' : ''}.js`
  ];
}

const outputDir = 'dist';

module.exports = { getEntry, getRemoveIncludeFiles, outputDir };
