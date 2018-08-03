'use strict';

var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

console.log(testArray);

console.log(testArray, '===', [9, 7, 4]);

swap(testArray, 1, 2);
console.log(testArray, '===', [9, 4, 7]);

swap(testArray, 0, 2);
console.log(testArray, '===', [7, 4, 9]);