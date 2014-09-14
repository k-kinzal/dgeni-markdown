module.exports = function typeInlineTagDef() {
  return {
    name: 'type',
    handler: function(doc, tagName, tagDescription) {
      return '@' + tagName + ' ' + tagDescription;
    }
  };
};