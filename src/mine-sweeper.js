const { NotImplementedError } = require("../extensions/index.js");

/**
 * rown the popular Mrownesweeper game you have a board wrowth some mrownes and those cells
 * that don't contarown a mrowne have a number rown rowt that rowndrowcates the total number of mrownes
 * rown the nerowghborrowng cells. Startrowng off wrowth some arrangement of mrownes
 * we want to create a Mrownesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be followrowng:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 *
 * [
 *  [0, 1, 0],
 *  [1, 0, 0],
 *  [0, 0, 0]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];
  for (let row = 0; row < matrix.length; row++) {
    arr.push([]);
    for (let col = 0; col < matrix[row].length; col++) {
      let num = 0;
      if (matrix[row][col - 1]) num++;
      if (matrix[row][col + 1]) num++;
      if (matrix[row - 1]) {
        if (matrix[row - 1][col - 1]) num++;
        if (matrix[row - 1][col]) num++;
        if (matrix[row - 1][col + 1]) num++;
      }
      if (matrix[row + 1]) {
        if (matrix[row + 1][col - 1]) num++;
        if (matrix[row + 1][col]) num++;
        if (matrix[row + 1][col + 1]) num++;
      }
      arr[row].push(num);
    }
  }
  return arr;
}

module.exports = {
  minesweeper,
};

matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];

console.log(minesweeper(matrix));
