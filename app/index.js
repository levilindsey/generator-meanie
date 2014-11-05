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

    var defaults = {
      appHumanReadableName: 'App Name',
      appHyphenatedName: 'app-name',
      appPrefix: 'app',
      appDescription: 'App description.',
      appCompleteUrl: 'http://app-url.com',
      authorFullName: 'Your Name',
      authorEmail: 'yourname@gmail.com',
      gitHubUsername: 'yourusername'
    };

    var prompts = [
      {
        type: 'input',
        name: 'appHumanReadableName',
        message: 'What is the human-readable name of your app? (' + defaults.appHumanReadableName + ')'
      },
      {
        type: 'input',
        name: 'appHyphenatedName',
        message: 'What is the hyphenated name/ID of your app? (' + defaults.appHyphenatedName + ')'
      },
      {
        type: 'input',
        name: 'appPrefix',
        message: 'What is the prefix you would like to use for Angular directives in your app? (' + defaults.appPrefix + ')'
      },
      {
        type: 'input',
        name: 'appDescription',
        message: 'What is a short description of your app? (' + defaults.appDescription + ')'
      },
      {
        type: 'input',
        name: 'appCompleteUrl',
        message: 'What is the URL for your app (include the protocol)? (' + defaults.appCompleteUrl + ')'
      },
      {
        type: 'input',
        name: 'authorFullName',
        message: 'What is your full name or your company\'s name? (' + defaults.authorFullName + ')'
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'What is your email? (' + defaults.authorEmail + ')'
      },
      {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your GitHub username? (' + defaults.gitHubUsername + ')'
      }
    ];

    // Greet the user
    this.log(yosay(
      'This generator will generate a web app project using the MEAN stack and gulp. This loosely follows the Best Practice Recommendations for Angular App Structure.'
    ));

    this.prompt(prompts, function (properties) {
      this.appHumanReadableName = properties.appHumanReadableName || defaults.appHumanReadableName;
      this.appHyphenatedName = properties.appHyphenatedName || defaults.appHyphenatedName;
      this.appCamelCaseName = this._.camelize(this.appHyphenatedName);
      this.appPrefix = properties.appPrefix || defaults.appPrefix;
      this.appDescription = properties.appDescription || defaults.appDescription;
      this.appCompleteUrl = properties.appCompleteUrl || defaults.appCompleteUrl;
      this.appShortenedUrl = this.appCompleteUrl.replace(/^.*:\/\//, '');
      this.authorFullName = properties.authorFullName || defaults.authorFullName;
      this.authorEmail = properties.authorEmail || defaults.authorEmail;
      this.gitHubUsername = properties.gitHubUsername || defaults.gitHubUsername;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      // Copy all template files to the new project
      this.directory('.', '.');

      // Copy and rename the .gitignore gile. The base copy in the repo for the generator needs to not start with a
      // period, so that git doesn't actually consider it as a functional .gitignore file for the generator project.
      this.src.copy('gitignore', '.gitignore');
    }
  },

  end: function () {
    // Remove the gitignore file (without the period) that was copied over during the bulk directory copy
    this.dest.delete('gitignore');

    this.installDependencies();
  }
});

module.exports = MeanieGenerator;
