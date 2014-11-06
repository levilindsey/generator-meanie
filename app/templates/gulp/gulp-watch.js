var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');
var gulpLiveReload = require('./gulp-live-reload');

gulp.task('watch', config.buildTasks, function () {
  gulp.watch(config.scriptsSrc, ['scripts']);
  gulp.watch(config.stylesSrc, ['styles']);
  gulp.watch(config.angularTemplatesSrc, ['angular-templates']);
  gulp.watch(config.indexSrc, ['index-templating']);
  gulp.watch(config.distGlob, gulpLiveReload.notifyLiveReload);

  gulp.start('tdd');
});
