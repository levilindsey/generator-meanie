var config = {};

config.port = 9000;

config.srcPath = 'src';
config.distPath = 'dist';
config.resPath = 'res';
config.bowerPath = 'bower_components';

config.karmaConfigPath = 'karma.conf.js';

config.scriptDistFileName = 'app-name.js';
config.vendorScriptDistFileName = 'lib.js';
config.vendorStyleDistFileName = 'lib.css';

config.testsSrc = config.srcPath + '/**/*_test.js';
config.indexSrc = config.srcPath + '/index.html';

config.scriptsSrc = [config.srcPath + '/**/*.js', '!' + config.testsSrc];
config.stylesPartialsSrc = config.srcPath + '/**/_*.scss';
config.stylesMainSrc = config.srcPath + '/main.scss';
config.stylesSrc = config.srcPath + '/**/*.scss';
config.templatesSrc = [config.srcPath + '/**/*.html', '!' + config.indexSrc];
config.mediaSrc = config.resPath + '/**';
config.iconsSrc = config.resPath + '/images/icons/*.svg';

config.distGlob = config.distPath + '/**';

config.scriptsDist = config.distPath + '/scripts';
config.stylesDist = config.distPath + '/styles';

config.vendorScriptsSrc =
    [config.bowerPath + '/**/*.js', '!' + config.bowerPath + '/**/*.min.js'];
config.vendorStylesSrc =
    [config.bowerPath + '/**/*.css', '!' + config.bowerPath + '/**/*.min.css'];

module.exports = config;
