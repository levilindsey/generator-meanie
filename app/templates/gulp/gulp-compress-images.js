var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('compress-images', function () {
  return gulp.src(config.imagesSrc)
    .pipe(plugins.plumber())
    //.pipe(plugins.cache(plugins.imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))// TODO: this was causing an error; need to fix it, and uncomment it
    .pipe(gulp.dest(config.imageDist));
});
