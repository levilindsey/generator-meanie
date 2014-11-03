var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('server', config.buildTasks, function () {
  gulp.start('custom-server');
});

// Useful for projects with custom server logic
gulp.task('custom-server', function () {
  require(config.serverMainPath);
});

// Useful for front-end-only projects
gulp.task('quick-server', function () {
  return gulp.src(config.distPath)
      .pipe(plugins.webserver({
        host: config.host,
        port: config.port,
        fallback: 'index.html',
        livereload: true,
        open: true
      }));
});
