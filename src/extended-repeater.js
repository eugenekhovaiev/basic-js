const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let bigStr;
  let additionArr = [];
  let additions;
  let resultArr = [];
  let result;

  if (options.addition || options.addition === false || options.addition === null) {
    if (options.addition === null) {
      if (options.additionRepeatTimes && options.addition === null) {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          additionArr.push('null');
        }
      } else {
        additionArr.push('null');
      }
    } else {
      if (options.additionRepeatTimes) {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          additionArr.push(options.addition);
        }
      } else {
        additionArr.push(options.addition);
      }
    }

    if(options.additionSeparator) {
      additions = additionArr.join(options.additionSeparator);
    } else {
      additions = additionArr.join('|');
    }

    bigStr = str + additions;
  } else {
    bigStr = str;
  }

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      resultArr.push(bigStr);
    }
  } else {
    resultArr.push(bigStr);
  }

  if (options.separator) {
    result = resultArr.join(options.separator);
  } else {
    result = resultArr.join('+');
  }
  
  return result;
}

module.exports = {
  repeater
};
