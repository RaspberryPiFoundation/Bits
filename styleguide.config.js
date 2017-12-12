const { createConfig, match } = require('@webpack-blocks/webpack')
const autoprefixer = require('autoprefixer')
const babel = require('@webpack-blocks/babel')
const postcss = require('@webpack-blocks/postcss')
const sass = require('@webpack-blocks/sass')

const sectionsConfig = require('./docs/config')

module.exports = {
  sections: sectionsConfig,
  webpackConfig: createConfig([
    babel(),
    match('*.scss', [sass(), postcss(autoprefixer())]),
  ]),
}
