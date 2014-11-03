var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('styles', function () {
  return gulp.src(config.stylesSrc)
      .pipe(plugins.plumber())
      .pipe(plugins.rubySass({style: 'expanded'}))
      .pipe(plugins.autoprefixer('last 2 version'))
      .pipe(gulp.dest(config.stylesDist))
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest(config.stylesDist));
});
