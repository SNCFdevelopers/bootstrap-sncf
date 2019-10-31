const path = require('path');

const getEntry = (srcPath) => ({
  'js/utils/dragscroll.js': path.resolve(srcPath, 'js/utils/dragscroll.js'),
  'js/utils/stretchy.js': path.resolve(srcPath, 'js/utils/stretchy.js'),
  'js/components/charts/barChart': path.resolve(srcPath, 'js/components/charts/barChart'),
  'js/components/charts/lineChart': path.resolve(srcPath, 'js/components/charts/lineChart'),
  'js/components/charts/pieChart': path.resolve(srcPath, 'js/components/charts/pieChart'),
  'js/components/charts/radarChart': path.resolve(srcPath, 'js/components/charts/radarChart'),
  'js/components/chips': path.resolve(srcPath, 'js/components/chips'),
  'js/components/control': path.resolve(srcPath, 'js/components/control'),
  'js/components/header': path.resolve(srcPath, 'js/components/header'),
  'js/components/nav-extern': path.resolve(srcPath, 'js/components/nav-extern'),
  'js/components/picker': path.resolve(srcPath, 'js/components/picker'),
  'js/components/progress': path.resolve(srcPath, 'js/components/progress'),
  'js/components/rangeSliders': path.resolve(srcPath, 'js/components/rangeSliders'),
  'js/components/searchbar': path.resolve(srcPath, 'js/components/searchbar'),
  'js/components/selectExclusive': path.resolve(srcPath, 'js/components/selectExclusive'),
  'js/components/selectMultiple': path.resolve(srcPath, 'js/components/selectMultiple'),
  'js/components/selectRadios': path.resolve(srcPath, 'js/components/selectRadios'),
  'js/components/table': path.resolve(srcPath, 'js/components/table'),
});

const getExternals = () => ({
  jquery : {
    commonjs: 'jquery',
    amd: 'jquery',
    commonjs2: 'jquery',
    root: '$'
  },
  jQuery : {
    commonjs: 'jquery',
    amd: 'jquery',
    commonjs2: 'jquery',
    root: '$'
  },
  // jquery : ['jquery', 'jQuery', '$'],
  flatpickr: 'flatpickr',
  'flatpickr/dist/l10n/fr.js': 'flatpickr/dist/l10n/fr.js',
  'flatpickr/dist/plugins/rangePlugin': 'flatpickr/dist/plugins/rangePlugin',
  'popper.js': 'popper.js',
  'chart.js': 'chart.js',
  'chartjs-plugin-zoom': 'chartjs-plugin-zoom',
  'lodash/findIndex': 'lodash/findIndex',
  'lodash/includes': 'lodash/includes',
  'lodash/pull': 'lodash/pull',
  // 'ion-rangeslider': 'ion-rangeslider'
})

module.exports = { getEntry, getExternals };
