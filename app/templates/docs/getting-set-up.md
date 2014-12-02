# Getting Set Up

## Install Global Software

### [Install Git](http://git-scm.com/)

### [Install Node.js](http://nodejs.org/)

### [Install Ruby](https://www.ruby-lang.org/en/)

### Install SASS

```bash
gem install sass
```

### Install Compass

```bash
gem install compass
```

### Install gulp globally

```bash
npm install -g gulp
```

### Install bower globally

```bash
npm install -g bower
```

### Install Protractor globally

```bash
npm install -g protractor
```

## Install local Software

### Clone this project repository to your local machine

```bash
git clone https://github.com/<%= gitHubUsername %>/<%= appHyphenatedName %>
```

### Use NPM to install all local project dependencies

From within your project directory, run:

```bash
npm install
```

## Run the App Locally

From within your project directory, run:

```bash
gulp
```

## Live Reload

[Live reload](http://livereload.com/) is a pretty cool feature that refreshes your page within the browser everytime you make a change to your code. The gulp tasks in this project do include support for live reload, but you will need to install a [plugin/extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) in your browser for this to work.
