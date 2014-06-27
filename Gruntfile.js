module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    
    lesslint: {
      src: ['main.less'],
      options: {
        imports: ['less/*.less']
      }
    }
  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  grunt.loadNpmTasks('grunt-lesslint');
};
