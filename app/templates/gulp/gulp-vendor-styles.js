var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('vendor-styles', function () {
  return gulp.src(config.vendorStylesSrc)
      .pipe(plugins.plumber())
      .pipe(plugins.concat(config.vendorStyleDistFileName))
      .pipe(gulp.dest(config.stylesDist));
});
