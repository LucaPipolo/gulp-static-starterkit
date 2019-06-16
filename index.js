/*
  gulpfile.js
*/

module.exports = function(gulp) {
  const appRoot = require('app-root-path');
  const fs = require('fs');
  const requireDir = require('require-dir');

  /* eslint-disable max-len */
  const configFile = fs.existsSync(appRoot + '/config.js') ? appRoot + '/config.js' : './config';
  const pkgFile = fs.existsSync(appRoot + '/package.json') ? appRoot + '/package.json' : './package.json';
  /* eslint-enable max-len */

  // Require configs and all tasks in gulp/tasks, including sub-folders.
  const config = require(configFile);
  const pkg = require(pkgFile);
  const tasks = requireDir('./tasks', {
    recurse: true,
  });

  /**
   * Requires all tasks in gulpfile.js/tasks, including subfolders.
   *
   * @param {*} tasks
   */
  function resolveTasks(tasks) {
    for (const task in tasks) {
      if ({}.hasOwnProperty.call(tasks, task)) {
        const fn = tasks[task];
        if (typeof fn !== 'function') {
          resolveTasks(fn);
          continue;
        }
        fn(config, pkg);
      }
    }
  }
  resolveTasks(tasks);
};
