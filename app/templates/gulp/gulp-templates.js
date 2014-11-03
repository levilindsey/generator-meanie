var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('templates', function () {
  return gulp.src(config.indexSrc)
    .pipe(plugins.plumber())
    .pipe(plugins.template({}))// TODO: add templating variables here (if I add default template variables, I will need to handle the problem that both lo-dash and yeoman consume the same `<%= %>` syntax)
    .pipe(gulp.dest(config.distPath));
});
