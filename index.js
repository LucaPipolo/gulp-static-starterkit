/*
  gulpfile.js
*/

const requireDir = require('require-dir');

// Require configs and all tasks in gulp/tasks, including sub-folders.
const config = require('./config');
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
      fn(config);
    }
  }
}
resolveTasks(tasks);
