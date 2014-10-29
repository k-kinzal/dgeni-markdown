// Canonical path provides a consistent path (i.e. always forward slashes) across different OSes
var path = require('canonical-path');

var Package = require('dgeni').Package;

module.exports = new Package('dgeni-markdown', [
  require('dgeni-packages/ngdoc'),
  require('dgeni-packages/nunjucks')
])
//
.config(function(templateFinder, templateEngine, getInjectables) {
  templateFinder.templateFolders = [path.resolve(__dirname, 'templates')];
  templateFinder.templatePatterns = [
    '${ doc.template }',
    '${ doc.area }/${ doc.id }.${ doc.docType }.template.md',
    '${ doc.area }/${ doc.id }.template.md',
    '${ doc.area }/${ doc.docType }.template.md',
    '${ doc.id }.${ doc.docType }.template.md',
    '${ doc.id }.template.md',
    '${ doc.docType }.template.md'
  ];
  templateEngine.filters = templateEngine.filters.concat(getInjectables([
    require('./rendering/filters/br'),
    require('./rendering/filters/nobr'),
    require('./rendering/filters/escape')
  ]));
})
//
.config(function(inlineTagProcessor, getInjectables) {
  inlineTagProcessor.inlineTagDefinitions = inlineTagProcessor.inlineTagDefinitions.concat(getInjectables([
    require('./inline-tag-defs/link'),
    require('./inline-tag-defs/type')
  ]));
})
// 
.config(function(computeIdsProcessor, createDocMessage, getAliases) {
  computeIdsProcessor.idTemplates.push({
    docTypes: ['controller', 'provider', 'service', 'directive', 'input', 'object', 'function', 'filter', 'type' ],
    idTemplate: 'module:${module}.${docType}:${name}',
    getAliases: getAliases
  });

})
// 
.config(function(computePathsProcessor, createDocMessage) {
  computePathsProcessor.pathTemplates = [];
  computePathsProcessor.pathTemplates.push({
    docTypes: ['controller', 'provider', 'service', 'directive', 'input', 'object', 'function', 'filter', 'type' ],
    pathTemplate: '${area}/${module}/${docType}/${name}',
    outputPathTemplate: '${module}/${docType}/${name}.md'
  });
  computePathsProcessor.pathTemplates.push({
    docTypes: ['module' ],
    pathTemplate: '${area}/${name}',
    outputPathTemplate: '${module}/index.md'
  });
  computePathsProcessor.pathTemplates.push({
    docTypes: ['componentGroup' ],
    pathTemplate: '${area}/${moduleName}/${groupType}',
    outputPathTemplate: '${moduleName}/${groupType}/index.md'
  });
});
