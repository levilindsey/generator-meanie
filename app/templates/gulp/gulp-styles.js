var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('styles', function () {
  return plugins.rubySass(config.stylesMainSrc, {style: 'expanded'})
    .on('error', handleError)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest(config.stylesDist))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest(config.stylesDist));
});

function handleError(error) {
  console.error('SASS error', error);
  throw error;
}
