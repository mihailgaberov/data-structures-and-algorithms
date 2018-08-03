var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

  var minValue = array[startIndex];
  var minIndex = startIndex;

  for(var i = minIndex + 1; i < array.length; i++) {
    if(array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var selectionSort = function(array) {
  var minIdx = 0;

  for (var i = 0; i < array.length; i++) {
    minIdx = indexOfMinimum(array, i);
    if (i < minIdx) {
      swap(array, i, minIdx);
    }
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);
console.log('test1: ', array, '===', [7, 9, 11, 22, 42, 88, 99]);

array = [0, 5, 04, 32, 76, 8, 63, 23, 21, 1];
selectionSort(array);
console.log("Array after sorting:  " + array);
console.log('test2: ', array, '===', [0, 1, 4, 5, 8, 21, 23, 32, 63, 76]);

array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
selectionSort(array);
console.log("Array after sorting:  " + array);
console.log('test3: ', array, '===', [1, 2, 3, 4, 5, 6, 7, 8, 9]);