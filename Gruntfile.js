module.exports = function (grunt) {
	'use strict';
	// Load all grunt tasks
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);


	grunt.initConfig({
		// Config Tasks
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		}
	});

	grunt.registerTask('test', [
		'karma:unit'
	]);
};