const path = require('path');

const mergeEntry = (entry, srcPath, theme) => {
  entry['js/bootstrap-sncf'].push(path.resolve(srcPath, 'js/docs.js'));
  entry['js/bootstrap-sncf'].push(path.resolve(srcPath, `js/docs/search-${theme}.js`));
  entry['css/bootstrap-sncf'].push(path.resolve(srcPath, `scss/${theme}-docs-light.scss`));
  entry['css/bootstrap-sncf.dark'].push(path.resolve(srcPath, `scss/${theme}-docs-dark.scss`));

  return entry;
}

const outputDir = '_gh_pages';

module.exports = { mergeEntry, outputDir };
