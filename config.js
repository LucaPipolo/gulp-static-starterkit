const src = './src/';
const dist = './dist/';
const tmp = './.tmp/';

module.exports = {
  src: {
    main: src,
    sass: [
      src + 'styles/**/*.scss',
    ],
    js: [
      src + 'scripts/**/*.js',
    ],
    imgs: [
      src + 'imgs/**/*',
    ],
    templates: [
      src + 'templates/**/!(_)*.pug',
    ],
    fonts: [
      src + 'fonts',
    ],
  },
  dist: {
    main: dist,
    styles: [
      dist + 'styles',
    ],
    scripts: [
      dist + 'scripts',
    ],
    imgs: dist + 'imgs',
    fonts: dist + 'fonts',
    templates: [
      dist + '**/*.html',
    ],
  },
  tmp: {
    main: tmp,
    styles: [
      tmp + 'styles',
    ],
    scripts: [
      tmp + 'scripts',
    ],
    templates: [
      tmp + '**/*.html',
    ],
  },
};
