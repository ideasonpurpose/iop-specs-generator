// Include gulp
var gulp = require('gulp');

// Include Plugins
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
//var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var del = require('del');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify-es').default;

// Paths
var _scss = '_assets/sass/**';
var _js = '_assets/js/**/*.js';

// Compile Sass
gulp.task('sass', function () {
  return gulp.src('_assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream({ match: '**/*.css' }));
});

// Production build
// Process styles, add vendor prefixes, minify, output to the appropriate location.
gulp.task('build:sass', function () {
  gulp.src(_scss, { nodir: true })
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/css'));
});

// Concatenate JS
gulp.task('scripts', function () {
  return gulp.src([
    '_assets/js/lib/*.js',
    '_assets/js/app/_components/*.js',
    '_assets/js/*.js',
    _js
  ])
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(browserSync.stream({ match: '**/main.min.js' }));
});

// Build JS
gulp.task('build:scripts', function () {
  return gulp.src([
    '_assets/js/lib/*.js',
    '_assets/js/app/_components/*.js',
    '_assets/js/*.js',
    _js
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

/*
 * Clean task
 */

gulp.task('clean', function (callback) {
  del(['assets']);
  callback();
});

// Watch Files For Changes
gulp.task('watch', function () {
  browserSync.init({
    server: '',
    ghostMode: true, // Toggle to mirror clicks, reloads etc. (performance)
    logFileChanges: true,
    open: true // Toggle to automatically open page when starting.
  });

  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch([_js], ['scripts']);
  gulp.watch(_scss, ['sass']);
});

// Default Task
gulp.task('default', function (callback) {
  runSequence(
    'clean',
    ['sass', 'scripts','watch'],
    callback)
});

// Build Task
gulp.task('build', function (callback) {
  runSequence(
    'clean',
    ['build:sass', 'build:scripts'],
    callback)
});
