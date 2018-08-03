var indexOfMinimum = function(array, startIndex) {
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:
  var minValue = array[startIndex];
  var minIndex = startIndex;

  // Loop over items starting with startIndex,
  // updating minValue and minIndex as needed:
  for (var i = startIndex+1; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
      minIndex = i;
    }
  }

  return minIndex;
};

var array = [18, 6, 66, 44, 9, 22, 14];
var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14],
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array,
//  "index" has value 4
console.log("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
console.log(index, '===',  4);

index = indexOfMinimum(array, 5);
console.log(index, '===', 6);

index = indexOfMinimum(array, 1);
console.log(index, '===', 1);