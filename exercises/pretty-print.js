function prettyPrint(A) {
  if (A < 1) throw Error('Invalid input');

  if (A === 1) return [1];

  var matrixRow = A * 2 - 1;
  console.log('matrixRow: ', matrixRow)
  var res = [];

  // Upper Half 
  var upperHalfLimit =  Math.floor(matrixRow / 2) + 1
  console.log('upperHalfLimit: ', upperHalfLimit);
  for (var i = 0; i < upperHalfLimit; i++) {
    console.log('upper part row:  ', i);

    var m = A;
    var row = [];

    // Decreasing part 
    for (var j = 0; j < i; j++) {
      console.log('upper -> decreasing: ', m)
      row.push(m);
      m--;
    }

    // constant Part
    for (var k = 0; k < matrixRow - 2 * i; k++) {
      console.log('upper -> constant: ', A-i)
      row.push(A - i);
    }

    // Increasing part
    m = A - i + 1;
    for (var l = 0; l < i; l++) {
      console.log('upper -> increasing: ', m)
      row.push(m);
      m++;
    }

    res.push(row);
  }

  // Lower Half 
  var lowerHalfLimit = Math.floor(matrixRow / 2) - 1;
  console.log('lowerHalfLImit: ', lowerHalfLimit);

  for (var i = lowerHalfLimit; i >= 0; i--) {
    console.log('lower part row:  ', i);

    var m = A;
    var row = [];

    // Decreasing Part 
    for (var j = 0; j < i; j++) {
      console.log('Lower -> decreasing: ', m)
      row.push(m);
      m--;
    }

    // Constant Part
    for (var k = 0; k < matrixRow - 2 * i; k++) {
      console.log('Lower -> constant: ', A-i)
      row.push(A - i);
    }

    // Increasing Part 
    m = A - i + 1;
    for (var l = 0; l < i; l++) {
      console.log('Lower -> Increasing: ', m)
      row.push(m);
      m++;
    }

    res.push(row);
  }
  
  return res;
}

// console.log(prettyPrint(1));
// console.log(prettyPrint(2));
console.log(prettyPrint(3));
// console.log(prettyPrint(4));
// console.log(prettyPrint(5));
