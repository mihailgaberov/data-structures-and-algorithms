 function kthsmallest(arr, kth) {
   // Cover edge cases
   if (kth <= 0 || arr.length <= 0 || kth > arr.length) throw Error('Invalid input')
   if (arr.length === 1) return arr[0]
  
   // Sort the array
   var arrSorted = arr.sort()

   // Return the element at kth-1 position as the arryas in js are 0 based
   return arr[kth-1]
 }

console.log(kthsmallest([2, 1, 4, 3, 2], 1)) // 1
console.log(kthsmallest([2, 1, 4, 3, 2], 2)) // 2
console.log(kthsmallest([2, 1, 4, 3, 2], 3)) // 2
console.log(kthsmallest([2, 1, 4, 3, 2], 4)) // 3
console.log(kthsmallest([2, 1, 4, 3, 2], 5)) // 4