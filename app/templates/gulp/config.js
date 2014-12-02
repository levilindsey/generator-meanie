var config = {};

config.srcPath = 'src';
config.distPath = 'dist';
config.resPath = 'res';
config.bowerPath = 'bower_components';

config.publicPath = config.srcPath + '/public';
config.serverPath = '../' + config.srcPath + '/server';

config.scriptsDist = config.distPath + '/scripts';
config.stylesDist = config.distPath + '/styles';
config.imageDist = config.distPath + '/images';

config.serverMainPath = config.serverPath + '/main';

config.karmaConfigPath = config.srcPath + '/karma.conf.js';

config.scriptDistFileName = '<%= appHyphenatedName %>.js';
config.vendorScriptDistFileName = 'lib.js';
config.vendorStyleDistFileName = 'lib.css';
config.angularTemplatesDistFileName = 'templates.js';

config.distGlob = config.distPath + '/**';

config.scriptsDistFilePath = config.scriptsDist + '/' + config.scriptDistFileName;
config.frontEndTestsSrc = config.publicPath + '/**/*_test.js';
config.backEndTestsSrc = config.serverPath + '/**/*_test.js';

config.allFilesForFrontEndTests = [
  config.scriptsDist + '/' + config.vendorScriptDistFileName,
  config.bowerPath + '/angular-mocks/angular-mocks.js',
  config.scriptsDistFilePath,
  config.scriptsDist + '/' + config.angularTemplatesDistFileName,
  config.frontEndTestsSrc
];

config.indexSrc = config.publicPath + '/index.html';

config.scriptsSrc = [
  config.publicPath + '/**/*.js',
  '!' + config.frontEndTestsSrc,
  '!' + config.backEndTestsSrc
];
config.stylesPartialsSrc = config.publicPath + '/**/_*.scss';
config.stylesMainSrc = config.publicPath + '/main.scss';
config.stylesSrc = config.publicPath + '/**/*.scss';
config.angularTemplatesSrc = [config.publicPath + '/**/*.html', '!' + config.indexSrc];
config.imagesSrc = config.resPath + '/images/**/*.+(png|jpg|gif)';
config.mediaSrc = [config.resPath + '/**', '!' + config.imagesSrc];
config.iconsSrc = config.resPath + '/images/icons/*.svg';
config.deviceIconsSrc = config.resPath + '/images/device-icons/*';

// TODO: these source arrays need to be manually kept up-to-date with the front-end libraries that are used in this app
config.vendorScriptsSrc = [
  config.bowerPath + '/angular/angular.js',
  config.bowerPath + '/angular-animate/angular-animate.js',
  config.bowerPath + '/angular-aria/angular-aria.js',
  config.bowerPath + '/angular-material/angular-material.js',
  config.bowerPath + '/angular-ui-router/release/angular-ui-router.js',
  config.bowerPath + '/hammerjs/hammer.js'
];
config.vendorScriptsMinSrc = [
  config.bowerPath + '/angular/angular.min.js',
  config.bowerPath + '/angular-animate/angular-animate.min.js',
  config.bowerPath + '/angular-aria/angular-aria.min.js',
  config.bowerPath + '/angular-material/angular-material.min.js',
  config.bowerPath + '/angular-ui-router/release/angular-ui-router.min.js',
  config.bowerPath + '/hammerjs/hammer.min.js'
];
config.vendorStylesSrc = [
  config.bowerPath + '/angular-material/angular-material.css',
  config.bowerPath + '/angular-material/themes/brown-theme.css'
];
config.vendorStylesMinSrc = [
  config.bowerPath + '/angular-material/angular-material.min.css',
  config.bowerPath + '/angular-material/themes/brown-theme.css'
];

config.buildTasks = [
  'scripts',
  'styles',
  'vendor-scripts',
  'vendor-styles',
  'angular-templates',
  'index',
  'copy-media',
  'copy-device-icons',
  'compress-images'
];

config.host = '0.0.0.0';
config.port = 3000;

module.exports = config;
