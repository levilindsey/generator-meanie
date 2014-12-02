var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var config = require('./config');

gulp.task('index', function () {
  return gulp.src(config.indexSrc)
    .pipe(plugins.plumber())

    // Inline the SVG store
    .pipe(plugins.inject(createSvgStream(), {
      transform: fileContentsTransform,
      starttag: '<!-- inject:svg-store:{{ext}} -->'
    }))

    // Template with Lo-dash
    .pipe(plugins.template({}))

    .pipe(gulp.dest(config.distPath));
});

// ---  --- //

function createSvgStream() {
  return gulp.src(config.iconsSrc)
    .pipe(plugins.plumber())
    .pipe(plugins.svgmin())
    .pipe(plugins.svgSprites({mode: 'symbols', svgId: 'svg-icon-%f'}));
}

function fileContentsTransform(filePath, file) {
  return file.contents.toString('utf8')
}
