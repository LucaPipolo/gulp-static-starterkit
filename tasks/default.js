/*
  default.js
*/

const gulp = require('gulp');

module.exports = function() {
  /**
   * Defines the default Gulp task.
   *
   * Note that the default.js file needs to be defined after all the
   * other tasks. This is why the other task files are prefixed with
   * an underscore.
   */
  gulp.task('default', gulp.series(
      'build'
  ), function(cb) {
    cb;
  });
};
