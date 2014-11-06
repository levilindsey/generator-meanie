var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var gulpConfig = require('./config');

gulp.task('server', ['watch', 'start-live-reload'], function () {
  gulp.start('custom-server');
});

// Useful for projects with custom server logic
gulp.task('custom-server', function () {
  require(gulpConfig.serverMainPath);
});

// Useful for front-end-only projects
gulp.task('quick-server', function () {
  return gulp.src(gulpConfig.distPath)
      .pipe(plugins.webserver({
        host: gulpConfig.host,
        port: gulpConfig.port,
        fallback: 'index.html',
        livereload: true,
        open: true
      }));
});
