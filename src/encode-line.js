const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(argument) {
  let result = ``;
  let counter = 1;
  if (argument.length === 1) {
    result = argument.charAt(0);
  } else {
    for (let i = 0; i < argument.length; i++) {
      if (argument.charAt(i) === argument.charAt(i + 1)) {
        counter++;
      } else if (argument.charAt(i) !== argument.charAt(i + 1)) {
        result = `${result}${counter === 1 ? "" : counter}${argument.charAt(
          i
        )}`;
        console.log(result);
        counter = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};

// console.log(encodeLine("abbcca"));
