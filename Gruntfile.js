module.exports = function (grunt) {
  // require
  // require('time-grunt')(grunt);
  // config
  var config = grunt.initConfig({
    notify_hooks: {
      options: {
        enabled: true,
        title: "dgeni-markdown"
      }
    },
	  clean: {
	    server: 'build'
	  },
	  watch: {
	    compass: {
	      files: [
	      	'index.js',
	    		'docs/**',
          'inline-tag-defs/**',
	    		'rendering/**',
	    		'templates/**'
	    	],
	      tasks: ['dgeni']
	    },
	  },
	  bower: {
	    install: {
	      options: {
	        targetDir: 'libs/',
	        install: true,
	        cleanTargetDir: true,
	        cleanBowerDir: false
	      }
	    }
	  }
  });
  // task
  grunt.registerTask('debug', [], function () {
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-regarde');
    grunt.renameTask('regarde', 'watch');
    grunt.task.run([
      'bower',
      'clean',
      'dgeni',
      'watch'
    ]);
  });
  grunt.registerTask('dgeni', [], function() {
    var Dgeni = require('dgeni');
    var done = this.async();
    var dgeni = new Dgeni([require('./docs/dgeni.config')]);
    dgeni.generate().then(done);
  });
  grunt.registerTask('default', ['dgeni']);
};

