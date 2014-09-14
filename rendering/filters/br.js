/**
 * @dgRenderFilter nobr
 * @description remove br.
 */
module.exports = function() {
  return {
    name: 'br',
    process: function(str) {
    	if (!str) {
    		str = '';
    	}
      return str.replace(/[\n\r]{1,2}/g, '  ')
    }
  };
};