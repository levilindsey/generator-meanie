var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('default', ['clean'], function () {
  gulp.start('server');
});
