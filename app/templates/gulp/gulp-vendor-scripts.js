var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('vendor-scripts', function () {
  return gulp.src(config.vendorScriptsSrc)
      .pipe(plugins.plumber())
      .pipe(plugins.concat(config.vendorScriptDistFileName))
      .pipe(gulp.dest(config.scriptsDist));
});
