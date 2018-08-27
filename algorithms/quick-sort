function qsort(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter(e => e < pivot)
    const greater = arr.filter(e => e > pivot)

    return qsort(less).concat([pivot]).concat(qsort(greater))
  }
}

console.log(qsort([1, 45, 12, 4, 3, 33]))
console.log(qsort([1, 2, 3, 44, 35, 6]))
console.log(qsort([6, 4, 5, 3, 1, 2]))
