var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('clean', function () {
  return gulp.src(config.distPath, {read: false})
      .pipe(plugins.plumber())
      .pipe(plugins.clean());
});
