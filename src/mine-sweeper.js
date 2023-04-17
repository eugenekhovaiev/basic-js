const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
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
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let minesweeperMatrix = matrix.map(row => [...row]);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let sum = 0;

      for (let k = i - 1; k <= i + 1; k++) {
      	for (let l = j - 1; l <= j + 1; l++) {
					if (k < 0 || k > matrix.length - 1 || l < 0 || l > matrix[0].length - 1 || k === i && l === j) {
						continue;
					} else if (matrix[k][l] === true) {
						sum++;
					}
				}
			}
      minesweeperMatrix[i][j] = sum;
    }
  }
  return minesweeperMatrix;
}

module.exports = {
  minesweeper
};
