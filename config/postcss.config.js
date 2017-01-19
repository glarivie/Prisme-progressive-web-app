var postCSSConfig = [
  /* autoprefix for different browser vendors */
  require('autoprefixer')({
    browsers: [
      '>1%',
      'last 4 versions',
      'Firefox ESR',
      'not ie < 9', // React doesn't support IE8 anyway
    ]
  }),
  /* reset inherited rules */
  require('postcss-initial')({
    reset: 'inherited' // reset only inherited rules
  }),
  /* enable css @imports like Sass/Less */
  require('postcss-import'),
  /* enable nested css selectors like Sass/Less */
  require('postcss-nested'),
  /* Enable Media Queries */
  require('postcss-custom-media')
]

// Export the PostCSS Config for usage in webpack
module.exports = postCSSConfig;
