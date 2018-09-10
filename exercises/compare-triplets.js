/**
 * It must return an array of two integers, the first being Alice's score and the second being Bob's.
 * compareTriplets has the following parameter(s)
 * a: an array of integers representing Alice's challenge rating
 * b: an array of integers representing Bob's challenge rating
 * Return an array of two integers denoting the respective comparison points earned by Alice and Bob.
 * Sample input:
 * 5 6 7
 * 3 6 10
 * 
 * Sample output:
 * 1 1
 * 
 * Sample Input 1:
 * 17 28 30
 * 99 16 8
 * 
 * Sample Output 1:
 * 2 1
 */
function compareTriplets (arrAlice, arrBob) {
  let scoreAlice = 0
  let scoreBob = 0

  for (let i = 0; i < arrAlice.length; i++) {
    if (arrAlice[i] > arrBob[i]) {
      scoreAlice++
    } else if (arrAlice[i] < arrBob[i]) {
      scoreBob++
    }
  }

  return [scoreAlice, scoreBob]
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]))
console.log(compareTriplets([17, 28, 30], [99, 16, 8]))
