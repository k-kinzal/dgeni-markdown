/**
 * @dgRenderFilter nobr
 * @description remove br.
 */
module.exports = function() {
  return {
    name: 'nobr',
    process: function(str) {
    	if (!str) {
    		str = '';
    	}
      return str.replace(/[\n\r]{2,}/g, '\n')
                .replace(/[\n\r]{1,2}\s+/g, ' ')
                .replace(/[\n\r]+/g, ' ');
    }
  };
};