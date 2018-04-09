'use strict'

const gulp = require('gulp')
const pkg = require('./package.json')

const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const header = require('gulp-header')
const notify = require('gulp-notify')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const scsslint = require('gulp-scss-lint')
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
    destDir: './lib',
    buildFile: 'Bits.css',
    buildFileMin: 'Bits.min.css',
  },
}

gulp.task('compile_all', ['compile_stylesheets'])

gulp.task('compile_stylesheets', () => {
  let config = assetsConfig.stylesheets

  return gulp
    .src([config.main])
    .pipe(
      sass().on('error', err => {
        return notify().write(err)
      }),
    )
    .pipe(stripComments())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }),
    )
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
    .pipe(
      header(banner, {
        buildFile: config.buildFile,
        pkg: pkg,
      }),
    )
    .pipe(rename(config.buildFileMin))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.destDir))
    .pipe(notify(`${pkg.name} Gulp: stylesheets completed`))
})

gulp.task('scsslint', () => {
  return gulp.src('src/**/*.scss').pipe(scsslint())
})

gulp.task('watch', () => {
  gulp.watch('./src/**/*.scss', ['scsslint', 'compile_stylesheets'])
})

gulp.task('default', ['scsslint', 'compile_all', 'watch'])
