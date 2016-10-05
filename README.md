# Grunt Skeleton
Grunt Skeleton is a simple script that allows to load and run Grunt tasks in a simple structure way.

## Install
Run `npm install -g grunt-skeleton` or add `grunt-skeleton` as a dependency to you project.

## Features
* Simple structure of files
* Automatic load of installed **grunt-contrib-** plugins
* Easy to getting started with Grunt
* Moment configurating for small projects

## How it works
You need to simply edit your **Gruntfile.js** with this code:

    module.export = function(grunt) {
    	require('grunt-skeleton')(grunt, {
			// grunt-skeleton options
    	});
    };

### Options
* **configs** - path files with configurations (**"./grunt/config/\*.json"**" by default)
* **tasks** - path for directory with Grunt tasks (**"./grunt/tasks"** by default)
* **aliases** - path for files with alieses (**"./grunt/aliases/\*.json"** by default)

## Configutation
### Configs
Configs is a json-files with common configurations for grunt. For example you can create **concat.json** files for concatenating files using *grunt-contrib-concat* module.

    {
		"default": {
			"src": [
				"src/first.js",
				"src/second.js"
			],
			"dest": "build/build.js"
		}
    }

### Tasks
Tasks are common Grunt tasks that will be included for your build.

    module.exports = function(grunt) {
		grunt.registerMultiTask('log', 'Log stuff.', function() {
			grunt.log.writeln(this.target + ': ' + this.data);
		});
	}

### Aliases
Aliases is a json-file which define task that running a set of other tasks. For example **default.json** file:

	[
		"concat",
		"log"
	]

This file defines **default** task that can be executed in command line by `grunt default`.
