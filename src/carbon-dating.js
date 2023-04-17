const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(data) {
  if (
    !data ||
    typeof data !== "string" ||
    isNaN(Number(data)) ||
    data.trim() == "" ||
    data == NaN ||
    +data <= 0 ||
    +data > MODERN_ACTIVITY
  ) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;

  let result = Math.ceil(Math.log(MODERN_ACTIVITY / data) / k);

  return result;
}

module.exports = {
  dateSample,
};

dateSample("ACTIVITY OVER 9000");
