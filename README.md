# dgeni-markdown

[dgeni](https://github.com/angular/dgeni) markdown template for generating documentation from source code.

## Install

```
npm install --save-dev dgeni-markdown
```

or download the css on github and include in your project.

## Example

[https://github.com/k-kinzal/dgeni-markdown-example](https://github.com/k-kinzal/dgeni-markdown-example)

## Usage

```js
var path = require('canonical-path');

var Package = require('dgeni').Package;

module.exports = new Package('dgeni-example', [
  require('dgeni-packages/markdown')
])

.config(function(readFilesProcessor) {
  // Specify the base path used when resolving relative paths to source files
  readFilesProcessor.basePath = path.resolve(__dirname, '../libs/');

  // Specify collections of source files that should contain the documentation to extract
  readFilesProcessor.sourceFiles = [
    {
      // Process all js files in `src` and its subfolders ...
      include: 'path/to/*.js',
      basePath: readFilesProcessor.basePath
    }
  ];
})
.config(function(writeFilesProcessor) {
  // Specify where the writeFilesProcessor will write our generated doc files
  writeFilesProcessor.outputFolder  = path.resolve(path.resolve(__dirname, '..'),'./build');
});
```
