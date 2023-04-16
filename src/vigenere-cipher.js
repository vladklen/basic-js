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
  constructor(boolean) {
    this.direct = boolean === false ? false : true;
    this.text = null;
    this.square = [];
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.symbols = {};
  }

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.square.push(row);
    }
  }
  getSquare() {
    return this.square;
  }

  getSymbols(string) {
    const alph = this.alphabet.split("");
    const arrayStr = string.toUpperCase().split("");
    arrayStr.forEach((element, index) => {
      if (!alph.includes(element)) {
        this.symbols[index] = element;
      }
    });
  }

  repeatString(firstString, secondString) {
    let resultString = "";
    let firstStringLength = firstString.length;
    let it = 0;
    for (let i = 0; i < secondString.length; i++) {
      if (i % firstStringLength === 0) {
        it = 0;
      }
      resultString += firstString[it];
      it++;
    }
    return resultString.toLowerCase();
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
    this.getSymbols(string);
    let message = string
      .replace(/[^a-z ]/gi, "")
      .replace(/\s/g, "")
      .toLowerCase();
    let encryptMessage = "";
    let newKey = this.repeatString(key, message);
    this.generateSquare();
    for (let it = 0; it < message.length; it++) {
      let i = this.alphabet.toLowerCase().indexOf(message[it]);
      let j = this.alphabet.toLowerCase().indexOf(newKey[it]);
      encryptMessage += this.square[i][j];
    }

    let result = encryptMessage.split("");
    for (let key in this.symbols) {
      result.splice(key, 0, this.symbols[key]);
    }
    if (this.direct) {
      return result.join("");
    } else {
      return result.reverse().join("");
    }
  }

  decrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
    this.getSymbols(string);
    let message = string
      .replace(/[^a-z ]/gi, "")
      .replace(/\s/g, "")
      .toLowerCase();
    let decryptMessage = "";
    let newKey = this.repeatString(key, message);
    this.generateSquare();
    for (let it = 0; it < message.length; it++) {
      let i = this.alphabet.toLowerCase().indexOf(newKey[it]);
      let j = this.square[i].toLowerCase().indexOf(message[it]);
      decryptMessage += this.alphabet[j];
    }
    let result = decryptMessage.split("");
    for (let key in this.symbols) {
      result.splice(key, 0, this.symbols[key]);
    }

    if (this.direct) {
      return result.join("");
    } else {
      return result.reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
