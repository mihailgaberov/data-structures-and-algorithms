/* Given an array and a value find if there is a pair of elements 
* that sums to that value, if val = 10, and arr = [1,3,5,1,5] -> return
* true (5+5=10) 
*/

function findSumOf2 (arr, val) {
  const visitedElements = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (visitedElements.has(val - arr[i])) {
      return true
    } else {
      visitedElements.add(arr[i])
    }
  }

  return false
}

console.log(findSumOf2([1, 3, 5, 1, 5], 10) === true)
console.log(findSumOf2([1, 3, 5, 1, 5], 9) === false)
console.log(findSumOf2([2, 1, 8, 4, 7, 3], 3) === true)
console.log(findSumOf2([2, 1, 8, 4, 7, 3], 20) === false)
console.log(findSumOf2([2, 1, 8, 4, 7, 3], 1) === false)
console.log(findSumOf2([2, 1, 8, 4, 7, 3], 2) === false)
console.log(findSumOf2([2, 1, 8, 4, 7, 3], 7) === true)
