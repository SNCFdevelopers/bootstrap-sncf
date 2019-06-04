'use strict'

module.exports = (ctx) => ({
  map: ctx.file.dirname.includes('examples') ? false : {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: [
    require('autoprefixer')({ browsers: ['last 2 versions', 'ie >= 9', 'iOS >= 7', 'Android >= 4.3'], compress: true })
  ]
})
