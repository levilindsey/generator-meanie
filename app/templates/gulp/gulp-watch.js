var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');
var gulpLiveReload = require('./gulp-live-reload');

gulp.task('watch', config.buildTasks, function () {
  gulp.watch(config.scriptsSrc, ['scripts']);
  gulp.watch(config.stylesSrc, ['styles']);
  gulp.watch(config.angularTemplatesSrc, ['angular-templates']);
  gulp.watch(config.indexSrc, ['index-templating']);
  gulp.watch(config.vendorScriptsSrc, ['vendor-scripts']);
  gulp.watch(config.vendorStylesSrc, ['vendor-styles']);
  gulp.watch(config.iconsSrc, ['svg-icons']);
  gulp.watch(config.mediaSrc, ['copy-media']);
  gulp.watch(config.imagesSrc, ['compress-images']);
  gulp.watch(config.deviceIconsSrc, ['copy-device-icons']);
  gulp.watch(config.distGlob, gulpLiveReload.notifyLiveReload);

  gulp.start('tdd');
});
