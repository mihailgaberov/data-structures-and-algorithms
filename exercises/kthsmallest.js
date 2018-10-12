 function kthsmallest(arr, kth) {
   // Cover edge cases
   if (kth <= 0 || arr.length <= 0 || kth > arr.length) throw Error('Invalid input')
   if (arr.length === 1) return arr[0]
  
   // Sort the array
   var arrSorted = arr.sort((a, b) => (a-b));

   // Return the element at kth-1 position as the arryas in js are 0 based
   return arr[kth-1]
 }

console.log(kthsmallest([2, 1, 4, 3, 2], 1)) // 1
console.log(kthsmallest([2, 1, 4, 3, 2], 2)) // 2
console.log(kthsmallest([2, 1, 4, 3, 2], 3)) // 2
console.log(kthsmallest([2, 1, 4, 3, 2], 4)) // 3
console.log(kthsmallest([2, 1, 4, 3, 2], 5)) // 4
console.log(kthsmallest([ 8, 16, 80, 55, 32, 8, 38, 40, 65, 18, 15, 45, 50, 38, 54, 52, 23, 74, 81, 42, 28, 16, 66, 35, 91, 36, 44, 9, 85, 58, 59, 49, 75, 20, 87, 60, 17, 11, 39, 62, 20, 17, 46, 26, 81, 92], 9)) // 17