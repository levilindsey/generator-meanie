var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy: false});
var config = require('./config');

gulp.task('default', ['clean'], function () {
  gulp.start('scripts', 'styles', 'vendor-scripts', 'vendor-styles', 'templates', 'svg-icons',
      'copy-index', 'copy-media', 'watch', 'server');
});
