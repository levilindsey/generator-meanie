var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy: false});
var config = require('./config');

gulp.task('server', config.buildTasks, function () {
  require(config.serverScriptPath);

//  return gulp.src(config.distPath)
//      .pipe(plugins.webserver({
//        host: config.host,
//        port: config.port,
//        fallback: 'index.html',
//        livereload: true,
//        open: true
//      }));
});
