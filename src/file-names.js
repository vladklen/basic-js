const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(array) {
  let names = [...array];
  let result = [];

  for (let i = 0; i < names.length; i++) {
    const element = names[i];

    if (!result.includes(element)) {
      result.push(element);
    } else {
      addNumber(element);
    }
  }

  function addNumber(el, num) {
    number = num ? num : 1;
    let newElement = el + `(${number})`;
    if (result.includes(newElement)) {
      addNumber(el, ++number);
    } else {
      result.push(newElement);
      return;
    }
  }
  return result;
}

module.exports = {
  renameFiles,
};
