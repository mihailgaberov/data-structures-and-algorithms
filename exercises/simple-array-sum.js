/** Given an array of integers, find the sum of its elements.
* For example, if the array arr = [1,2,3] ,1 + 2 + 3 = 6, so return .
*/

function simpleArraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11])) // 31
