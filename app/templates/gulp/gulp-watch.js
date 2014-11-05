var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('watch', config.buildTasks, function () {
  gulp.watch(config.scriptsSrc, ['scripts']);
  gulp.watch(config.stylesSrc, ['styles']);
  gulp.watch(config.angularTemplatesSrc, ['angular-templates']);
  gulp.watch(config.indexSrc, ['index-templating']);

  gulp.start('tdd');
});
