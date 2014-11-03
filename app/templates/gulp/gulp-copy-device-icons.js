var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('copy-device-icons', function () {
  return gulp.src(config.deviceIconsSrc)
      .pipe(plugins.plumber())
      .pipe(gulp.dest(config.distPath));
});
