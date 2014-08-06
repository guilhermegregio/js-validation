module.exports = function (grunt) {
	'use strict';
	// Load all grunt tasks
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);


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
		}
	});

	grunt.registerTask('test', [
		'karma:unit'
	]);

	grunt.registerTask('test-w', [
		'karma:watch'
	]);
};