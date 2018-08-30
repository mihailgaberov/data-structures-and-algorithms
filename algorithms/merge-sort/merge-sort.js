function mergeSort(arr) {
  if (arr.length < 2) return arr

  const middleIdx = Math.floor(arr.length / 2)
  const firstHalf = arr.slice(0, middleIdx)
  const secondHalf = arr.slice(middleIdx)

  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}


function merge(sortedArr1, sortedArr2) {
  let result = []

  while(sortedArr1.length && sortedArr2.length) {
    let minElem

    if (sortedArr1[0] < sortedArr2[0]) {
      minElem = sortedArr1.shift()
    } else {
      minElem = sortedArr2.shift()
    }

    result.push(minElem)
  }

  if (sortedArr1.length) {
    result = result.concat(sortedArr1)
  } else {
    result = result.concat(sortedArr2)
  }

  return result
}

console.log(mergeSort([4, 3, 2, 1]))
console.log(mergeSort([4, 54, 21, 1, 2, 321, 3456, 346, 23, 23423, 324, 25, 34, 4, 235, 346]))
console.log(mergeSort([5, 2, 6, 1, 0, 0, 2, 4, 10]))
console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))
