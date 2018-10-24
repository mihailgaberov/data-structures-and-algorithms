/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For example, the square matrix  is shown below:
 * 1 2 3
 * 4 5 6
 * 9 8 9  
 * 
 *  The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5+9=17. Their absolute difference is
 * |15 - 17| = 2.
 * 
 * The first line contains a single integer, n , the number of rows and columns in the matrix . 
* Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].
 */

function diagonalDifference(arr) {
  const matrixMap = {}

  let n = arr.length - 1

  while (n >= 0) {
    matrixMap['row' + (n + 1)] = arr[n]
    n--
  }

  let leftDiagonalSum = 0
  let rightDiagonalSum = 0
  let len = arr.length

  for (let i = 0; i < len; i++) {
    const leftDiagonalElement = matrixMap['row' + (i + 1)][i]
    const rightDiagonalElement = matrixMap['row' + (i + 1)][(len-1) - i]
    leftDiagonalSum += leftDiagonalElement
    rightDiagonalSum += rightDiagonalElement
  }

  return Math.abs(leftDiagonalSum - rightDiagonalSum)
}

console.log(diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
]))