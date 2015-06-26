'use strict';


module.exports = function( grunt ){

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({


        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'src/**/*.js']
        }
    });

    grunt.registerTask('default',['jshint']);
};