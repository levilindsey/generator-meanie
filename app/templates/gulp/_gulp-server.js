var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy: false});
var config = require('./gulp/config');

gulp.task('server', plugins.connect.server({
  root: [config.distPath],
  port: config.port,
  livereload: true
}));
