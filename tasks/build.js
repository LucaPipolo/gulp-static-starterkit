/*
  build.js
*/

const gulp = require('gulp');

module.exports = function() {
  /**
   * Defines the build Gulp task.
   *
   * Note that the build.js file needs to be defined after all the other tasks.
   * This is why the other task files are prefixed with an underscore.
   */
  gulp.task('build', gulp.series(
      'clean',
      'lint:sass', 'sass',
      'lint:js', 'js',
      'images',
      'fonts:google', 'fonts:custom',
      'lint:pug', 'pug', 'template:injectAssets',
      'copy:htaccess',
  ), function(cb) {
    cb;
  });
};
