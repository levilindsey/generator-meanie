var gulp = require('gulp');
var glob = require('glob');

function loadTasks(includes) {
  includes
      .reduce(function (paths, include) {
        return paths.concat(glob.sync(include));
      }, [])
      .forEach(function (path) {
        require(path);
      });
}

loadTasks(['./gulp/**/*.js', '!./gulp/**/config.js']);
