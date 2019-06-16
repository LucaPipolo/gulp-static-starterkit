/*
  templates.js
*/

const gulp = require('gulp');

module.exports = function(config) {
  const argv = require('yargs').argv;
  const gulpIf = require('gulp-if');
  const handleErrors = require('../utils/handleErrors');
  const isProduction = (argv.production === undefined) ? false : true;
  const revReplace = require('gulp-rev-replace');

  /**
   * Compiles Pug files.
   *
   * If the gulp command is executed with the `--production` option, the images
   * `rev-manifest.json` file is used to replace the images references in the
   * compiled HTML file.
   */
  gulp.task('pug', function() {
    const fs = require('fs');
    const pug = require('gulp-pug');

    let manifest = '';
    if (fs.existsSync(config.dist.main + 'rev-manifest.json')) {
      manifest = gulp.src(config.dist.main + 'rev-manifest.json');
    }

    const task = gulp.src(config.src.templates[1])
        .pipe(pug({
          pretty: true,
        }))
        .pipe(gulpIf(isProduction, revReplace({manifest: manifest})))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.tmp.main));
    return task;
  });

  /**
   * Injects assets files.
   *
   * Pug files are compiled into the `dist` folder.
   * `gul-useref` is used to inject CSS and JS files into the compiled
   * HTML file. If the gulp command is executed with the `--production` option,
   * assets are minified and static asset revisioning hashes added.
   */
  gulp.task('template:injectAssets', function() {
    const cleanCSS = require('gulp-clean-css');
    const rename = require('gulp-rename');
    const rev = require('gulp-rev');
    const uglify = require('gulp-uglify');
    const useref = require('gulp-useref');

    return gulp.src(config.tmp.templates)
        .pipe(useref())
        .pipe(gulpIf(isProduction && '*.css', cleanCSS()))
        .pipe(gulpIf(isProduction && '*.js', uglify({
          output: {
            comments: '/^!/',
          },
        })))
        .pipe(gulpIf(isProduction && '!index.html', rev()))
        .pipe(gulpIf(isProduction && '*.css', rename({
          suffix: '.min',
        })))
        .pipe(gulpIf(isProduction && '*.js', rename({
          suffix: '.min',
        })))
        .pipe(gulpIf(isProduction, revReplace()))
        .on('error', handleErrors)
        .pipe(gulp.dest(config.dist.main));
  });
};
