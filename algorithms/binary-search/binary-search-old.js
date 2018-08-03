'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input: ', (str) => {
  console.log('');
  console.log('Output: ', doSearch(str));
  console.log('');
  rl.close();
});


/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(targetValue) {
  targetValue = parseInt(targetValue, 10);
  var arrPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  var min = 0;
  var max = arrPrimes.length - 1;
  var guess;
  var numOfGuesses = 0;

  while (min <= max) {
    guess = Math.floor((max + min) / 2);
    numOfGuesses++;
    if (arrPrimes[guess] === targetValue) {
      console.log('Number of guesses: ', numOfGuesses);
      return guess;
    } else if (arrPrimes[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

// Tests
/*console.log('doSearch(73) === 20 ==>', doSearch(73) === 20);
console.log('doSearch(3) === 1 ==>', doSearch(3) === 1);
console.log('doSearch(59) === 16 ==>', doSearch(59) === 16);*/