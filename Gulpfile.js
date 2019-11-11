'use strict'

const gulp = require('gulp')
const pkg = require('./package.json')

const autoprefixer = require('autoprefixer')
const cssnano = require('gulp-cssnano')
const header = require('gulp-header')
const notify = require('gulp-notify')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-dart-sass')
const sourcemaps = require('gulp-sourcemaps')
const stripComments = require('gulp-strip-css-comments')

const cssDestDir = './lib'
const cssDestFile = 'Bits.css'
const cssDestFileMin = 'Bits.min.css'
const sassEntryFile = './src/styles/main.scss'
const sassSourceDir = './src/styles'

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
    .src(sassEntryFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      header(banner, {
        pkg: pkg,
      })
    )
    .pipe(rename(cssDestFile))
    .pipe(gulp.dest(cssDestDir))
    .pipe(stripComments())
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(
      postcss([
        autoprefixer({
          flexbox: true,
          grid: true,
        }),
      ])
    )
    .pipe(
      header(banner, {
        pkg: pkg,
      })
    )
    .pipe(rename(cssDestFileMin))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssDestDir))
    .pipe(notify('Sass compiled! ヽ(゜∇゜)ノ'))
}

const watch = () => gulp.watch(sassSourceDir + '/**/*', compileScss)

gulp.task('build', gulp.series(compileScss))
gulp.task('start', gulp.series(watch))
gulp.task('watch', gulp.series(watch))
