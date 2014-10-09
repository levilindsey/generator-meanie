var config = {};

config.port = 9000;

config.srcPath = 'src';
config.distPath = 'dist';
config.resPath = 'res';
config.bowerPath = 'bower_components';

config.publicPath = config.srcPath + '/public';
config.serverPath = config.srcPath + '/server';

config.karmaConfigPath = 'karma.conf.js';

config.scriptDistFileName = 'levi.sl.js';
config.vendorScriptDistFileName = 'lib.js';
config.vendorStyleDistFileName = 'lib.css';

config.testsSrc = config.publicPath + '/**/*_test.js';
config.indexSrc = config.publicPath + '/index.html';

config.scriptsSrc = [config.publicPath + '/**/*.js', '!' + config.testsSrc];
config.stylesPartialsSrc = config.publicPath + '/**/_*.scss';
config.stylesMainSrc = config.publicPath + '/main.scss';
config.stylesSrc = config.publicPath + '/**/*.scss';
config.templatesSrc = [config.publicPath + '/**/*.html', '!' + config.indexSrc];
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
