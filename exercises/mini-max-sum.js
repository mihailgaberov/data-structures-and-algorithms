/* Given five positive integers, find the minimum and maximum values
 * that can be calculated by summing exactly four of the five integers.
 * Then print the respective minimum and maximum values as a single
 *  line of two space-separated long integers.

* For example, arr = [1, 3, 5, 7, 9] . Our minimum sum is 1+3+5+7=16 and our maximum sum is 3+5+7+9=24. 
* We would print

* 16 24

Sample Input

1 2 3 4 5
Sample Output

10 14 
*/

function miniMaxSum(arr) {
  let arrSorted = arr.sort((a, b) => (a-b));

  let minSum = 0
  let maxSum = 0

  for (let i = 0; i < arrSorted.length; i++) {
    if (i !== arrSorted.length - 1) {
      minSum += arrSorted[i]
    }

    if (i !== 0) {
      maxSum += arrSorted[i]
    }
      
  }
  
  console.log(minSum, maxSum)
}

miniMaxSum([1, 2, 3, 4, 5]) // 10 14
miniMaxSum([9, 3, 1, 5, 7]) // 16 24