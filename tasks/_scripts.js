/*
  scripts.js
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
   * Transpiles JavaScript files.
   *
   * ES6 and ES7 code is transpiled thanks to Babel. Copyright is injected
   * taking information from the package.json file. If the gulp command
   * have the production option, the sourcemaps are not created.
   */
  gulp.task('js', function() {
    const babel = require('gulp-babel');
    const changed = require('gulp-changed');
    const gulpIf = require('gulp-if');
    const handleErrors = require('../utils/handleErrors');
    const replace = require('gulp-replace');
    const sourcemaps = require('gulp-sourcemaps');
    const uglify = require('gulp-uglify');

    const task = gulp.src(config.src.js)
        .pipe(changed(config.dist.main, {extension: '.js'}))
        .pipe(gulpIf(!isProduction, sourcemaps.init()))
        .pipe(babel())
        .pipe(replace(copyrightPlaceholder, copyrightNotice))
        .pipe(gulpIf(isProduction, uglify()))
        .pipe(gulpIf(!isProduction, sourcemaps.write(config.sourcemaps)))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.tmp.scripts));
    return task;
  });
};
