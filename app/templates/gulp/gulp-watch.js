var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('watch', config.buildTasks, function () {
  gulp.watch(config.scriptsSrc, ['scripts']);
  gulp.watch(config.stylesSrc, ['styles']);
  gulp.watch(config.angularTemplatesSrc, ['angular-templates']);
  gulp.watch([config.indexSrc, config.svgImagesSrc], ['index']);
  gulp.watch(config.vendorScriptsSrc, ['vendor-scripts']);
  gulp.watch(config.vendorStylesSrc, ['vendor-styles']);
  gulp.watch(config.mediaSrc, ['copy-media']);
  gulp.watch(config.imagesSrc, ['compress-images']);
  gulp.watch(config.deviceIconsSrc, ['copy-device-icons']);

  gulp.start('tdd');
});
