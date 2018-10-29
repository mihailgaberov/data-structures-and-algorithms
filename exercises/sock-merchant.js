/* 
 John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are n=7 socks with colors [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

Sample Input

9
10 20 20 10 10 30 50 10 20
Sample Output

3
*/

function sockMerchant(n, arr) {
  let hash = {}
  let couples = 0

  for (let i = 0; i < n; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1
    } else {
      hash[arr[i]]++
    }
  }

  for (let p in hash) {
    for (let j = hash[p]; j > 0; j--) {
      if (j % 2 === 0) {
        couples++
       }
    }
  }

  return couples
}


sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]) // 2
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]) // 3
