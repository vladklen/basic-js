const { NotImplementedError } = require("../extensions/index.js");

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
  if (typeof options.repeatTimes == "undefined") options.repeatTimes = 1;
  if (typeof options.separator == "undefined") options.separator = "+";
  if (typeof options.addition == "undefined") options.addition = "";
  if (typeof options.additionRepeatTimes == "undefined")
    options.additionRepeatTimes = 1;
  if (typeof options.additionSeparator == "undefined")
    options.additionSeparator = "|";
  let additionString = Array(options.additionRepeatTimes)
    .fill(String(options.addition))
    .join(options.additionSeparator);
  return Array(options.repeatTimes)
    .fill(str + additionString)
    .join(options.separator);
}

module.exports = {
  repeater,
};
