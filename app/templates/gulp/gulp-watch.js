var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('watch', ['tdd'], function () {
  gulp.watch(config.scriptsSrc, ['scripts']);
  gulp.watch(config.stylesSrc, ['styles']);
  gulp.watch(config.templatesSrc, ['templates']);
  gulp.watch(config.indexSrc, ['copy-index']);
});
