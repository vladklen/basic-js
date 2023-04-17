const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(number) {
  let array = Array.from(String(number));
  let result = [];

  array.forEach((el, index) => {
    let num =
      array.slice(0, index).join("") +
      array.slice(index + 1, array.length).join("");
    result.push(num);
  });
  return Math.max(...result);
}

module.exports = {
  deleteDigit,
};
