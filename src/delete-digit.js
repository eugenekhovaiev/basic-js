const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nArr = n.toString().split('').map(item => +item);
  let combinations = [];
  for (let i = 0; i < nArr.length; i++) {
    let buffer = [...nArr]; 
    buffer.splice(i, 1);
    combinations.push(+buffer.join(''));
  }
  return Math.max(...combinations);
}

module.exports = {
  deleteDigit
};
