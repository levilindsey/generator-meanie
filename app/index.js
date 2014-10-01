'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var MeanieGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'This generator will generate a web app project using the MEAN stack, and which follows the Best Practice Recommendations for Angular App Structure.'
    ));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('src');

      this.writing._createAppFrontEndFiles();
      this.writing._createAppBackEndFiles();
    },

    projectfiles: function () {
      this.src.copy('_bower.json', 'bower.json');
      this.src.copy('_package.json', 'package.json');
      this.src.copy('_README.md', 'README.md');
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
      this.src.copy('gitignore', '.gitignore');

      **;// TODO: add gulp/grunt files (or rather, just implement the synchronous, recursive, dynamic fs walk solution...)
//      var fs = require('fs');
//      var walk = function(dir, done) {
//        var results = [];
//        fs.readdir(dir, function(err, list) {
//          if (err) return done(err);
//          var i = 0;
//          (function next() {
//            var file = list[i++];
//            if (!file) return done(null, results);
//            file = dir + '/' + file;
//            fs.stat(file, function(err, stat) {
//              if (stat && stat.isDirectory()) {
//                walk(file, function(err, res) {
//                  results = results.concat(res);
//                  next();
//                });
//              } else {
//                results.push(file);
//                next();
//              }
//            });
//          })();
//        });
//      };
    },

    _createAppFrontEndFiles: function () {
      // TODO: refactor this (and the same for the back-end function) to happen recursively using the fs module, so that everything still works even when I change the file structure
      this.dest.mkdir('src/public');

      this.src.copy('src/public/_index.html', 'src/public/index.html');
      this.src.copy('src/public/_main.js', 'src/public/main.js');
      this.src.copy('src/public/_main.scss', 'src/public/main.scss');
      this.src.copy('src/public/_routes.js', 'src/public/routes.js');

      this.dest.mkdir('src/public/components');

      this.dest.mkdir('src/public/components/nav-bar');
      this.src.copy('src/public/components/nav-bar/_nav-bar-directive.js', 'src/public/components/nav-bar/nav-bar-directive.js');
      this.src.copy('src/public/components/nav-bar/_nav-bar-directive_test.js', 'src/public/components/nav-bar/nav-bar-directive_test.js');
      this.src.copy('src/public/components/nav-bar/__nav-bar.scss', 'src/public/components/nav-bar/_nav-bar.scss');
      this.src.copy('src/public/components/nav-bar/_nav-bar.html', 'src/public/components/nav-bar/nav-bar.html');

      this.dest.mkdir('src/public/models');
      this.src.copy('src/public/models/_user-service.js', 'src/public/models/user-service.js');

      this.dest.mkdir('src/public/routes');

      this.dest.mkdir('src/public/routes/home');
      this.src.copy('src/public/routes/home/_home-controller.js', 'src/public/routes/home/home-controller.js');
      this.src.copy('src/public/routes/home/_home-controller_test.js', 'src/public/routes/home/home-controller_test.js');
      this.src.copy('src/public/routes/home/__home.scss', 'src/public/routes/home/_home.scss');
      this.src.copy('src/public/routes/home/_home.html', 'src/public/routes/home/home.html');

      this.dest.mkdir('src/public/routes/login');
      this.src.copy('src/public/routes/login/_login-controller.js', 'src/public/routes/login/login-controller.js');
      this.src.copy('src/public/routes/login/_login-controller_test.js', 'src/public/routes/login/login-controller_test.js');
      this.src.copy('src/public/routes/login/__login.scss', 'src/public/routes/login/_login.scss');
      this.src.copy('src/public/routes/login/_login.html', 'src/public/routes/login/login.html');
    },

    _createAppBackEndFiles: function () {
      this.dest.mkdir('src/server');

      this.src.copy('src/server/_main.js', 'src/server/main.js');

      this.dest.mkdir('src/server/config');
      this.src.copy('src/server/config/_config.js', 'src/server/config.js');
      this.src.copy('src/server/config/_secure-config.js', 'src/server/secure-config.js');

      this.dest.mkdir('src/server/middleware');
      this.src.copy('src/server/_middleware.js', 'src/server/middleware.js');
      // TODO:

      this.dest.mkdir('src/server/database');
      this.src.copy('src/server/database/_db.js', 'src/server/database/db.js');
      // TODO:

      this.dest.mkdir('src/server/database/test-data');
      this.src.copy('src/server/database/test-data/gitkeep', 'src/server/database/test-data/.gitkeep');

      this.dest.mkdir('src/server/routes');
      this.src.copy('src/server/_routes.js', 'src/server/routes.js');
      // TODO:

      this.dest.mkdir('src/server/test');
      this.src.copy('src/server/_config_test.js', 'src/server/config_test.js');
      this.src.copy('src/server/_main_test.js', 'src/server/main_test.js');
      this.src.copy('src/server/_middleware_test.js', 'src/server/middleware_test.js');
      this.src.copy('src/server/_routes_test.js', 'src/server/routes_test.js');
      // TODO:
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = MeanieGenerator;
