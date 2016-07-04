'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    minify      = require('gulp-minify'),
    cleanCSS    = require('gulp-clean-css'),
    concat      = require('gulp-concat');

// compile scss -> css
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// concat css
gulp.task('concat-css', function() {
  return gulp.src(['css/ux-test-ml.css', 'mesh.min.css'])
    .pipe(concat('ux-test-ml.css'))
    .pipe(gulp.dest('css'));
});

// minify css
gulp.task('minify-css', function() {
    return gulp.src('css/ux-test-ml.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('dist'));
});

 // concat js
gulp.task('concat-js', function() {
  return gulp.src(['libs/jquery.min.js', 'libs/tiny.min.js', 'libs/chico-1.0.min.js', 'libs/main.js'])
    .pipe(concat('ux-test-ml.js'))
    .pipe(gulp.dest('libs'));
});

// minify js
gulp.task('minify-js', function() {
  gulp.src('libs/ux-test-ml.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']

    }))
    .pipe(gulp.dest('dist'))
});

// default gulp task
gulp.task('default', ['sass', 'concat-css', 'minify-css', 'concat-js', 'minify-js'], function() {});
