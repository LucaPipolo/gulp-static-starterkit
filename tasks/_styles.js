/*
  styles.js
*/

const gulp = require('gulp');

module.exports = function(config, pkg) {
  const argv = require('yargs').argv;
  const isProduction = (argv.production === undefined) ? false : true;

  const copyrightPlaceholder = '/*! #copyright DO NOT REMOVE# */';
  const copyrightNotice = ['/*!',
    ' * ' + pkg.name + ' - ' + pkg.description,
    ' * @version v' + pkg.version,
    ' * @link ' + pkg.homepage,
    ' * @author ' + pkg.author,
    ' */',
    ''].join('\n');

  /**
   * Compiles Sass files.
   *
   * Sass files are compiled to the dist folder. Copyright is injected
   * taking information from the package.json file. If the gulp command
   * have the production option, the sourcemaps are not created.
   */
  gulp.task('sass', function() {
    const autoprefixer = require('autoprefixer');
    const changed = require('gulp-changed');
    const gulpIf = require('gulp-if');
    const handleErrors = require('../utils/handleErrors');
    const replace = require('gulp-replace');
    const sass = require('gulp-sass');
    const sourcemaps = require('gulp-sourcemaps');

    const task = gulp.src(config.src.sass)
        .pipe(changed(config.dist.main, {extension: '.css'}))
        .pipe(gulpIf(!isProduction, sourcemaps.init()))
        .pipe(sass({
          compress: true,
          outputStyle: isProduction ? 'compressed' : 'nested',
          use: [
            autoprefixer(),
          ],
        }))
        .pipe(replace(copyrightPlaceholder, copyrightNotice))
        .pipe(gulpIf(!isProduction, sourcemaps.write(config.sourcemaps)))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.tmp.styles));
    return task;
  });
};
