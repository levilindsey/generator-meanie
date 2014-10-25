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

    // Greet the user
    this.log(yosay(
      'This generator will generate a web app project using the MEAN stack, and which follows the Best Practice Recommendations for Angular App Structure.'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'appHumanReadableName',
        message: 'What is the human-readable name of your app?'
      },
      {
        type: 'input',
        name: 'appHyphenatedName',
        message: 'What is the hyphenated name/ID of your app?'
      },
      {
        type: 'input',
        name: 'appDescription',
        message: 'What is a short description of your app?'
      },
      {
        type: 'input',
        name: 'appCompleteUrl',
        message: 'What is the URL for your app? (include the protocol)'
      },
      {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'googleAnalyticsTrackingId',
        message: 'What is your Google Analytics tracking ID?'
      }
    ];

    this.prompt(prompts, function (properties) {
      this.appHumanReadableName = properties.appHumanReadableName;
      this.appHyphenatedName = properties.appHyphenatedName;
      this.appCamelCaseName = properties.appHyphenatedName ?
        this._.camelize(properties.appHyphenatedName): '<appName>';
      this.appDescription = properties.appDescription;
      this.appCompleteUrl = properties.appCompleteUrl;
      this.appShortenedUrl = properties.appCompleteUrl ?
        properties.appCompleteUrl.replace(/^.*:\/\//, '') : '<url-name>';
      this.gitHubUsername = properties.gitHubUsername;
      this.googleAnalyticsTrackingId = properties.googleAnalyticsTrackingId;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      // Copy all template files to the new project
      this.directory('.', '.');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = MeanieGenerator;
