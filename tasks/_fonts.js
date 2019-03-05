/*
  fonts.js
*/

const gulp = require('gulp');

module.exports = function(config) {
  /**
   * Downloads Google Fonts files.
   */
  gulp.task('fonts:google', function() {
    const googleWebFonts = require('gulp-google-webfonts');

    const task = gulp.src(config.src.fonts + '/google-fonts.list', {
      allowEmpty: true,
    })
        .pipe(googleWebFonts({fontsDir: '../fonts'}))
        .pipe(gulp.dest(config.dist.fonts));
    return task;
  });

  /**
   * Flat custom installed fonts.
   */
  gulp.task('fonts:custom', function() {
    const flatten = require('gulp-flatten');

    const task = gulp.src(config.src.fonts + '**/*')
        .pipe(flatten())
        .pipe(gulp.dest(config.dist.fonts));
    return task;
  });
};
