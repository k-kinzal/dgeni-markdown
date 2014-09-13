var path = require('canonical-path');

module.exports = require('../index')

.config(function(dgeni, log) {
  // error
  dgeni.stopOnValidationError = false;
  dgeni.stopOnProcessingError = false;

  // Set logging level
  log.level = 'info';
})

.config(function(readFilesProcessor) {
  // Specify the base path used when resolving relative paths to source and output files
  readFilesProcessor.basePath = path.resolve(__dirname, '../libs/');

  // Specify collections of source files that should contain the documentation to extract
  readFilesProcessor.sourceFiles = [
    {
      // Process all js files in `src` and its subfolders ...
      include: 'angular/angular.js',
      // When calculating the relative path to these files use this as the base path.
      // So `src/foo/bar.js` will have relative path of `foo/bar.js`
      basePath: readFilesProcessor.basePath
    },
    {
      // Process all js files in `src` and its subfolders ...
      include: 'famous-angular/dist/famous-angular.js',
      // When calculating the relative path to these files use this as the base path.
      // So `src/foo/bar.js` will have relative path of `foo/bar.js`
      basePath: readFilesProcessor.basePath
    }
  ];
})
.config(function(writeFilesProcessor) {
  // Specify where the writeFilesProcessor will write our generated doc files
  writeFilesProcessor.outputFolder  = path.resolve(path.resolve(__dirname, '..'),'./build');
});