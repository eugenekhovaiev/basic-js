const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (mode = true) {
    this.mode = mode;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let upperStrArr = str.toUpperCase().split('').filter(item => {
      return item >= 'A'&& item <= 'Z';
    });

    let addititonArr = [];
    for (let i = 0; i < Math.ceil(upperStrArr.length / key.length); i++) {
      addititonArr.push(...key.toUpperCase().split(''));
    }

    addititonArr = addititonArr.slice(0, upperStrArr.length);

    let cipheredArr = [];
    for (let i = 0; i < upperStrArr.length; i++) {
      const strIndex = alphabet.indexOf(upperStrArr[i]);
      const keyIndex = alphabet.indexOf(addititonArr[i]);
      if (strIndex + keyIndex >= alphabet.length) {
        cipheredArr.push(alphabet[strIndex + keyIndex - alphabet.length]);
      } else {
        cipheredArr.push(alphabet[strIndex + keyIndex]);
      }
    }
    
    str.toUpperCase().split('').forEach((item, index) => {
      if (!alphabet.includes(item)) {
        cipheredArr.splice(index, 0, item);
      }
    });

    if (this.mode === false) {
      cipheredArr.reverse();
    }

    const cipheredStr = cipheredArr.join('');
    return cipheredStr;
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let upperStrArr = str.toUpperCase().split('').filter(item => {
      return item >= 'A'&& item <= 'Z';
    });

    let addititonArr = [];
    for (let i = 0; i < Math.ceil(upperStrArr.length / key.length); i++) {
      addititonArr.push(...key.toUpperCase().split(''));
    }

    addititonArr = addititonArr.slice(0, upperStrArr.length);

    let cipheredArr = [];
    for (let i = 0; i < upperStrArr.length; i++) {
      const strIndex = alphabet.indexOf(upperStrArr[i]);
      const keyIndex = alphabet.indexOf(addititonArr[i]);
      if ((keyIndex - strIndex) > 0) {
        cipheredArr.push(alphabet[alphabet.length - (keyIndex - strIndex)]);
      } else {
        cipheredArr.push(alphabet[Math.abs(keyIndex - strIndex)]);
      }
    }
    
    str.toUpperCase().split('').forEach((item, index) => {
      if (!alphabet.includes(item)) {
        cipheredArr.splice(index, 0, item);
      }
    });

    if (this.mode === false) {
      cipheredArr.reverse();
    }

    const cipheredStr = cipheredArr.join('');
    return cipheredStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};
