const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(data) {
  if (data === undefined) {
    return "Unable to determine the time of year!";
  }

  if (Object.getOwnPropertyNames(data).length > 0 || isNaN(Date.parse(data))) {
    throw new Error("Invalid date!");
  }

  let date = new Date(data);
  const month = date.getMonth();

  return month === 11
    ? "winter"
    : month < 2
    ? "winter"
    : month < 5
    ? "spring"
    : month < 8
    ? "summer"
    : "fall";
}

module.exports = {
  getSeason,
};

// // getSeason("foo");
// // console.log(getSeason(new Date(909, 5, 12, 16, 55, 52, 635)));
// getSeason(new Date(83, 9, 25, 16, 20, 23, 544));
// getSeason("foo");
