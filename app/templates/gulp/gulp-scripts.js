var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('scripts', function () {
  return gulp.src(config.scriptsSrc)
      .pipe(plugins.plumber())
//      .pipe(plugins.jshint())
//      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.concat(config.scriptDistFileName))
      .pipe(gulp.dest(config.scriptsDist))
      .pipe(plugins.size({title: 'Scripts before minifying'}))
      .pipe(plugins.rename({suffix: '.min'}))
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.uglify())
      .pipe(gulp.dest(config.scriptsDist))
      .pipe(plugins.size({title: 'Scripts after minifying'}));
});
