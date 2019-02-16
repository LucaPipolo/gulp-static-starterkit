/*
  clean.js
*/

const gulp = require('gulp');

module.exports = function(config) {
  /**
   * Cleans dist and tmp directories.
   */
  gulp.task('clean', function() {
    const del = require('del');

    return del([
      `${config.tmp.main}/**`,
      `${config.dist.main}/**`,
    ]);
  });
};
