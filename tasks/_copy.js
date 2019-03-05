/*
  copy.js
*/

const gulp = require('gulp');

module.exports = function(config) {
  /**
   * Copies htaccess file from src to dist directory.
   */
  gulp.task('copy:htaccess', function() {
    const copy = require('gulp-copy');

    const task = gulp.src(config.src.main + '.htaccess', {
      allowEmpty: true,
    })
        .pipe(copy(config.dist.main, {
          prefix: 1,
        }))
        .pipe(gulp.dest(config.dist.main));
    return task;
  });
};
