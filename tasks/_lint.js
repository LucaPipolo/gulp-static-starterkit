/*
  lint.js
*/

const gulp = require('gulp');

module.exports = function(config) {
  const changedInPlace = require('gulp-changed-in-place');
  const handleErrors = require('../utils/handleErrors');

  /**
   * Lints Sass files.
   */
  gulp.task('lint:sass', function() {
    const stylelint = require('gulp-stylelint');

    return gulp.src(config.src.sass)
        .pipe(changedInPlace({
          firstPass: true,
        }))
        .pipe(stylelint({
          syntax: 'scss',
          reporters: [{
            formatter: 'string',
            console: true,
          }],
        }))
        .on('error', handleErrors);
  });

  /**
   * Lints JavaScript files.
   */
  gulp.task('lint:js', function() {
    const eslint = require('gulp-eslint');

    return gulp.src(config.src.js)
        .pipe(changedInPlace({
          firstPass: true,
        }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .on('error', handleErrors);
  });

  /**
   * Lints Pug files.
   */
  gulp.task('lint:pug', function() {
    const puglinter = require('gulp-pug-linter');

    return gulp.src(config.src.templates)
        .pipe(changedInPlace({
          firstPass: true,
        }))
        .pipe(puglinter())
        .pipe(puglinter({
          reporter: 'default',
        }))
        .on('error', handleErrors);
  });
};
