var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('svg-icons', function () {
  return gulp.src(config.iconsSrc)
      .pipe(plugins.plumber())
      .pipe(plugins.svgSprites({mode: 'symbols', svgId: 'svg-icon-%f'}))
      .pipe(gulp.dest(config.distPath));
});
