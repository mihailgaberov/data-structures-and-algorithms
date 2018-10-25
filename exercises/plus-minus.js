/* Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

For example, given the array [1,1,0,-1,-1] there are 5 elements, two positive, two negative and one zero. Their ratios would be 2/5 = 0.400000 , 2/5 = 0.400000 and 1/5 = 0.200000. It should be printed as
0.400000
0.400000
0.200000

Sample Input

6
-4 3 -9 0 4 1         
Sample Output

0.500000 // positive
0.333333 // negative
0.166667 // zeros
*/

function plusMinus(arr) {
  let positives = 0
  let negatives = 0
  let zeros = 0
  let len = arr.length

  while (len >= 0) {
    if (arr[len] > 0) {
      positives++
    } else if (arr[len] < 0) {
      negatives++
    } else if (arr[len] === 0){
      zeros++
    }

    len--;
  }
  console.log(`${(positives / arr.length).toFixed(6)}`)
  console.log(`${(negatives / arr.length).toFixed(6)}`)
  console.log(`${(zeros / arr.length).toFixed(6)}`)
}


console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0]))