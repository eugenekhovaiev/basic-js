const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str1Arr = s1.split('');
  let str2Arr = s2.split('');
  let count = 0;

  for (let i = 0; i < str1Arr.length; i++) {
    for (let j = 0; j < str2Arr.length; j++){
      if (str1Arr[i] === str2Arr[j]) {
        count++;
        str1Arr.splice(i, 1);
        str2Arr.splice(j, 1);
        i--;
        j--;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
