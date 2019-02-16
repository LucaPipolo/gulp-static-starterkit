/*
  handleErrors.js

  Send error to notification center with gulp-notify.
*/

const notify = require('gulp-notify');

module.exports = function() {
  // eslint-disable-next-line prefer-rest-params
  const args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Gulp StarterKit compile failed',
    subtitle: '<%= error.plugin %>: <%= error.name %>',
    message: '<%= error.message %>',
  }).apply(this, args);
  if (typeof this.emit === 'function') {
    this.emit('end');
  }
};
