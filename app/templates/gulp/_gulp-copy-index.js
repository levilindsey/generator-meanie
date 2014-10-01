var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy: false});
var config = require('./gulp/config');

gulp.task('copy-index', function () {
  return gulp.src(config.indexSrc)
      .pipe(plugins.plumber())
      .pipe(gulp.dest(config.distPath));
});
