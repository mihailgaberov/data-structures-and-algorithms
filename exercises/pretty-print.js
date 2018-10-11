function prettyPrint(A) {
  if (A < 1) throw Error('Invalid input');

  if (A === 1) return [1];

  const matrixRow = A * 2 - 1;
  const res = [];

  // Upper Half 
  for (let i = 0; i < Math.floor((matrixRow / 2)) + 1; i++) {

    let m = A;
    const row = [];

    // Decreasing part 
    for (let j = 0; j < i; j++) {
      row.push(m);
      m--;
    }

    // Constant Part 
    for (let k = 0; k < matrixRow - 2 * i; k++) {
      row.push(A - i);
    }

    // Increasing part
    m = A - i + 1;
    for (let l = 0; l < i; l++) {
      row.push(m);
      m++;
    }

    res.push(row);
  }

  // Lower Half 
  for (let i = Math.floor(matrixRow / 2) - 1; i >= 0; i--) {

    let m = A;
    const row = [];

    // Decreasing Part 
    for (let j = 0; j < i; j++) {
      row.push(m);
      m--;
    }

    // Constant Part
    for (let k = 0; k < matrixRow - 2 * i; k++) {
      row.push(A - i);
    }

    // Increasing Part 
    m = A - i + 1;
    for (let l = 0; l < i; l++) {
      row.push(m);
      m++;
    }

    res.push(row);
  }
  
  return res;
}

console.log(prettyPrint(2));
console.log(prettyPrint(3));
console.log(prettyPrint(4));
console.log(prettyPrint(5));
