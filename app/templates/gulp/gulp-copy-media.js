var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('copy-media', function () {
  return gulp.src(config.mediaSrc)
      .pipe(plugins.plumber())
      .pipe(gulp.dest(config.distPath));
});
