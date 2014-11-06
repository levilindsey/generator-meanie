var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var gulpConfig = require('./config');
var serverConfig = require('../src/server/config/config');
var tinylr;

exports.notifyLiveReload = notifyLiveReload;

gulp.task('start-live-reload', function () {
  tinylr = require('tiny-lr')();
  tinylr.listen(serverConfig.app.liveReloadPort);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}
