var gulp = require('gulp');
var glob = require('glob');

function loadTasks(includes) {
  includes
      // Expand the glob to get an array of the actual file paths
      .reduce(function (paths, include) {
        return paths.concat(glob.sync(include));
      }, [])
      // Register each task with gulp
      .forEach(function (path) {
        require(path);
      });
}

loadTasks(['./gulp/**/*.js', '!./gulp/**/config.js']);
