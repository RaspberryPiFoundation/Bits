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
const stripComments = require('gulp-strip-css-comments')

// Set banner template
const banner = [
  '/*',
  `  ${pkg.name}`,
  '',
  `  ${pkg.description}`,
  '',
  `  Author:      ${pkg.author.name}`,
  `  Author URI:  ${pkg.author.url}`,
  `  Version:     ${pkg.version}`,
  '*/',
  '',
  '',
].join('\n')

// Get configuration files
const assetsConfig = {
  stylesheets: {
    main: './src/styles/main.scss',
    components: './src/components/**/*.scss',
    destDir: './lib',
    buildFile: 'Bits.css',
    buildFileMin: 'Bits.min.css',
  },
}

gulp.task('stylesheets', () => {
  let config = assetsConfig.stylesheets

  return gulp
    .src([config.main, config.components])
    .pipe(
      sass().on('error', err => {
        return notify().write(err)
      }),
    )
    .pipe(stripComments())
    .pipe(autoprefixer())
    .pipe(
      header(banner, {
        buildFile: config.buildFile,
        pkg: pkg,
      }),
    )
    .pipe(rename(config.buildFile))
    .pipe(gulp.dest(config.destDir))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(rename(config.buildFileMin))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.destDir))
    .pipe(notify(`${pkg.name} Gulp: stylesheets completed`))
})

gulp.task('all', ['stylesheets'])

gulp.task('watch', () => {
  gulp.watch('./src/**/*.scss', ['stylesheets'])
})

gulp.task('default', ['all', 'watch'])
