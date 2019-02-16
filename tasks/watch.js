/*
  watch.js
*/

const gulp = require('gulp');

module.exports = function(config) {
  const browserSync = require('browser-sync');
  const fs = require('fs');

  /**
   * Watches files and run related tasks if there are changes.
   */
  gulp.task('watch:start', function() {
    const task = browserSync.init({
      server: {
        baseDir: config.dist.main,
      },
    });
    gulp.watch(config.src.sass, gulp.series(
        'lint:sass', 'sass', 'template:injectAssets'
    ));
    gulp.watch(config.src.js, gulp.series(
        'lint:js', 'js', 'template:injectAssets'
    ));
    gulp.watch(config.src.imgs, gulp.series(
        'images', 'pug', 'template:injectAssets'
    ));
    gulp.watch(config.src.fonts, gulp.series(
        'fonts:google', 'fonts:custom'
    ));
    gulp.watch(config.src.templates, gulp.series(
        'lint:pug', 'pug', 'template:injectAssets'
    ));
    gulp.watch(config.src.main + '.htaccess', gulp.series('copy:htaccess'));
    gulp.watch(config.dist.main, gulp.series('reload'));
    return task;
  });

  /**
   * Reloads the browser.
   */
  gulp.task('reload', function(cb) {
    browserSync.reload();
    cb();
  });

  /**
   * Checks if the dist folder exists or not. If not, run the build task
   * before starting to watch.
   */
  if (fs.existsSync(config.dist.main)) {
    gulp.task('watch', gulp.series('watch:start', function(cb) {
      cb();
    }));
  }
  else {
    gulp.task('watch', gulp.series('build', 'watch:start', function(cb) {
      cb();
    }));
  }
};
