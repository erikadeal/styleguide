'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: true,
          sourcemap: false
        },
        files: {
          'css/main.css': [
            'sass/main.scss'
          ]
        }
      },
      build: {
        options: {
          style: 'compressed',
          compass: true,
          sourcemap: false
        },
        files: {
          'css/main.min.css': [
            'sass/main.scss'
          ]
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dev: {
        options: {
          map: {
            prev: 'css/'
          }
        },
        src: 'css/main.css'
      },
      build: {
        src: 'css/main.min.css'
      }
    },
    watch: {
      sass: {
        files: [
          'sass/*.scss',
          'sass/**/*.scss'
        ],
        tasks: ['sass:dev', 'autoprefixer:dev']
      },
      livereload: {
        options: {
          livereload: false
        },
        files: [
          'css/main.css'
        ]
      }
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  grunt.registerTask('dev', [
    'sass:dev',
    'autoprefixer:dev',
    'watch'
  ]);
  grunt.registerTask('build', [
    'sass:build',
    'autoprefixer:build'
  ]);
};
