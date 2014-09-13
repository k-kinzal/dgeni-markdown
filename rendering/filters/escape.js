/**
 * @dgRenderFilter nobr
 * @description remove br.
 */
module.exports = function() {
  return {
    name: 'esc',
    process: function(str) {
    	if (!str) {
    		str = '';
    	}
      return str.replace(/\|/g, '&#124;');
    }
  };
};