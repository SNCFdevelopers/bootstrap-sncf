module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
        exclude: ['transform-typeof-symbol']
      }
    ]
  ],
  plugins: [
    'transform-class-properties',
    process.env.PLUGINS && 'transform-es2015-modules-strip',
    '@babel/proposal-object-rest-spread'
  ].filter(Boolean)
};
