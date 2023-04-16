const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = [];
	let counter = 1;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			counter++;
		} else {
      if (counter === 1) {
        encodedStr.push(str[i]);
        counter = 1;
      } else {
        encodedStr.push(counter, str[i]);
        counter = 1;
      }
		}
	}
	return encodedStr.join('');
}

module.exports = {
  encodeLine
};
