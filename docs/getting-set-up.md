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

### Install Yeoman globally

```bash
npm install -g yo
```

### Install this generator globally

```bash
npm install -g generator-meanie
```

## Install local Software

### Run the generator to install all initial project files

Create a new directory for project.

From within your project directory, run:

```bash
yo meanie
```

## Run the App Locally

From within your project directory, run:

```bash
gulp
```

## Replace / Remove Initial Components as Needed

In particular, you might want to perform searches for these strings:

- dataNameService
- DataName
- someDataUrl
- font-name
- component-name
- component-name_test

## Live Reload

[Live reload](http://livereload.com/) is a pretty cool feature that refreshes your page within the browser everytime you make a change to your code. The gulp tasks in this generator do include support for live reload, but you will need to install a [plugin/extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) in your browser for this to work.
