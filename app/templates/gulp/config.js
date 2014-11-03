var config = {};

// --- Server file-system paths --- //

config.srcPath = 'src';
config.distPath = 'dist';
config.resPath = 'res';
config.bowerPath = 'bower_components';

config.publicPath = config.srcPath + '/public';
config.serverPath = '../' + config.srcPath + '/server';

config.serverMainPath = config.serverPath + '/main';

config.karmaConfigPath = config.srcPath + '/karma.conf.js';

config.scriptDistFileName = '<%= appHyphenatedName %>.js';
config.vendorScriptDistFileName = 'lib.js';
config.vendorStyleDistFileName = 'lib.css';

config.testsSrc = config.publicPath + '/**/*_test.js';
config.indexSrc = config.publicPath + '/index.html';

config.scriptsSrc = [config.publicPath + '/**/*.js', '!' + config.testsSrc];
config.stylesPartialsSrc = config.publicPath + '/**/_*.scss';
config.stylesMainSrc = config.publicPath + '/main.scss';
config.stylesSrc = config.publicPath + '/**/*.scss';
config.angularTemplatesSrc = [config.publicPath + '/**/*.html', '!' + config.indexSrc];
config.imagesSrc = config.resPath + '/images/**/*.+(png|jpg|gif)';
config.mediaSrc = [config.resPath + '/**', '!' + config.imagesSrc];
config.iconsSrc = config.resPath + '/images/icons/*.svg';
config.deviceIconsSrc = config.resPath + '/images/device-icons/*';

config.distGlob = config.distPath + '/**';

config.scriptsDist = config.distPath + '/scripts';
config.stylesDist = config.distPath + '/styles';

config.vendorScriptsSrc =
    [config.bowerPath + '/**/*.js', '!' + config.bowerPath + '/**/*.min.js'];
config.vendorStylesSrc =
    [config.bowerPath + '/**/*.css', '!' + config.bowerPath + '/**/*.min.css'];

// --- Front-end routes --- //



// ---  --- //

config.buildTasks = ['scripts', 'styles', 'vendor-scripts', 'vendor-styles', 'angular-templates', 'svg-icons',
  'templates', 'copy-media', 'copy-device-icons', 'compress-images', 'watch'];

config.host = '0.0.0.0';
config.port = 3000;

module.exports = config;
