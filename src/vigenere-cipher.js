const { NotImplementedError } = require("../extensions/index.js");

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
  type = true;
  constructor(boolean) {
    this.type = boolean === false ? false : true;
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }

    let strArr = string.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");
    let result = [];
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
      let strIndex = this.alphabet.indexOf(strArr[i]);
      if (strIndex === -1) {
        result.push(strArr[i]);
      } else {
        if (count >= key.length) {
          count = count % keyArr.length;
        }
        let keyIndex = this.alphabet.indexOf(keyArr[count]);
        let letters =
          this.alphabet[
            (this.alphabet.length + (strIndex + keyIndex)) %
              this.alphabet.length
          ];
        result.push(letters);
        count++;
      }
    }
    if (this.type) {
      return result.join("");
    } else {
      return result.reverse().join("");
    }
  }

  decrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }

    let strArr = string.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");
    let result = [];
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
      let strIndex = this.alphabet.indexOf(strArr[i]);
      if (strIndex === -1) {
        result.push(strArr[i]);
      } else {
        if (count >= key.length) {
          count = count % keyArr.length;
        }
        let keyIndex = this.alphabet.indexOf(keyArr[count]);
        let letters =
          this.alphabet[
            (this.alphabet.length + (strIndex - keyIndex)) %
              this.alphabet.length
          ];
        result.push(letters);
        count++;
      }
    }
    if (this.type) {
      return result.join("");
    } else {
      return result.reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};

// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);

// console.log(
//   directMachine.encrypt("Example of sequence: 1, 2, 3, 4.", "lilkey")
// );
