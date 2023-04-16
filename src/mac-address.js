const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal macArr[i]s (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let macArr = n.split('-');
  if (macArr.length !== 6) {
    return false;
  }

  macArr = macArr.join('').split('');
  for (let i = 0; i < macArr.length; i++) {
    if (macArr[i] >= 'A' && macArr[i] <= 'F' || macArr[i] >= '0' && macArr[i] <= '9') {
      return true;
    } else {
      return false;
    }
  };
}
module.exports = {
  isMAC48Address
};
