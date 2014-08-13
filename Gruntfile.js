module.exports = function (grunt) {
	'use strict';
	// Load all grunt tasks
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	var remapify = require('remapify');

	grunt.initConfig({
		// Config Tasks
		karma: {
			options: {
				configFile: 'karma.conf.js'
			},
			unit: {
				singleRun: true
			},
			watch: {
			}
		},
		browserify: {
			options: {
				bundleOptions: {
					standalone: 'Validator',
					debug: true
				}
			},
			dist: {
				src: ['./src/teste/index.js'],
				dest: './build/js/Validator.js'
			}
		},
		uglify: {
			build: {
				files: {
					'build/js/Validator.min.js': ['build/js/Validator.js']
				}
			}
		}
	});

	grunt.registerTask('test', [
		'karma:unit'
	]);

	grunt.registerTask('test-w', [
		'karma:watch'
	]);
};