'use strict'

const gulp = require('gulp')
const pkg = require('./package.json')

const autoprefixer = require('gulp-autoprefixer')
const browserslist = require('browserslist')
const cssnano = require('gulp-cssnano')
const header = require('gulp-header')
const notify = require('gulp-notify')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const stripComments = require('gulp-strip-css-comments')

const cssDest = './web/app/themes/mind-control/css/'
const sassSource = './assets/scss/application.scss'

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

const compileScss = () => {
  return gulp
    .src(sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      header(banner, {
        pkg: pkg,
      }),
    )
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest(cssDest))
    .pipe(stripComments())
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(
      postcss([
        autoprefixer({
          browsers: browserslist(),
          flexbox: true,
          grid: true,
        }),
      ]),
    )
    .pipe(
      header(banner, {
        pkg: pkg,
      }),
    )
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssDest))
    .pipe(notify('Sass compiled! ヽ(゜∇゜)ノ'))
}

const watch = () => gulp.watch(sassSource + '/**/*', compileScss)

gulp.task('start', gulp.series(watch))
gulp.task('watch', gulp.series(watch))
