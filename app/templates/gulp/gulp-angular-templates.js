var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('angular-templates', function () {
  return gulp.src(config.angularTemplatesSrc)
    .pipe(plugins.plumber())
    .pipe(plugins.angularTemplatecache(config.angularTemplatesDistFileName, {standalone: true}))
    .pipe(gulp.dest(config.scriptsDist));
});
