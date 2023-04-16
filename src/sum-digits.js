const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  return separate(num);

  function separate(number) {
    if (number < 10) {
      return number;
    }

    let result = number
      .toString()
      .split("")
      .reduce(function (sum, el) {
        console.log(sum);
        console.log(el);
        return +sum + +el;
      });

    return separate(result);
  }
}

module.exports = {
  getSumOfDigits,
};
