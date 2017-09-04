'use strict'

const gulp = require('gulp')
const pkg = require('./package.json')

const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const notify = require('gulp-notify')
const header = require('gulp-header')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

// Set banner template
const banner = [
  '/*',
  `  Theme Name: ${pkg.name}`,
  `  Author: ${pkg.author.name}`,
  `  Author URI: ${pkg.author.url}`,
  `  Description: ${pkg.description}`,
  `  Version: ${pkg.version}`,
  '*/',
  '',
  '',
].join('\n')

// Get configuration files
const assetsConfig = {
  stylesheets: {
    source: './src/styles',
    main: 'main.scss',
    destDir: './lib',
    buildFile: 'Bits.css',
  },
}

gulp.task('stylesheets', () => {
  let config = assetsConfig.stylesheets

  return gulp
    .src(config.source + '/' + config.main)
    .pipe(sourcemaps.init())
    .pipe(
      sass().on('error', err => {
        return notify().write(err)
      }),
    )
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(
      header(banner, {
        buildFile: config.buildFile,
        pkg: pkg,
      }),
    )
    .pipe(rename(config.buildFile))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.destDir))
    .pipe(notify(`${pkg.name} Gulp: stylesheets completed`))
})

gulp.task('all', ['stylesheets'])

gulp.task('watch', () => {
  gulp.watch(assetsConfig.stylesheets.source + '/**/*', ['stylesheets'])
})

gulp.task('default', ['all', 'watch'])
