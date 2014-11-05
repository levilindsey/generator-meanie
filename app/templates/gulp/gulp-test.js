var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('test', config.buildTasks, function () {
  return gulp.src(config.allFilesForFrontEndTests)
      .pipe(plugins.plumber())
      .pipe(plugins.karma({configFile: config.karmaConfigPath, action: 'run'}));
});
