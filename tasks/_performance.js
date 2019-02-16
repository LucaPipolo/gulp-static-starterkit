/*
  performance.js
*/

const gulp = require('gulp');
const psiNgrok = require('psi-ngrok');

module.exports = function(config) {
  /**
   * Uses Ngrok and Google PageSpeed to run a local performance test.
   */
  gulp.task('performances', function(cb) {
    psiNgrok();
    cb();
  });
};
