module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('default', function(){
    var defaultTasks = [];
    grunt.task.run(defaultTasks);
  });
};