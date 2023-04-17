const { NotImplementedError } = require("../extensions/index.js");

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
function getCommonCharacterCount(stringOne, stringTwo) {
  let count = 0;
  let str1 = stringOne.split("");
  let str2 = stringTwo.split("");

  str1.forEach((el) => {
    let index = str2.indexOf(el);
    if (str2.includes(el)) {
      count++;
      str2.splice(index, 1);
    }
  });
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
