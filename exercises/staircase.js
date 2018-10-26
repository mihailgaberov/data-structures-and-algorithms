/* 
 Consider a staircase of size :

   #
  ##
 ###
####
Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
*/

function staircase(n) {
  const SYMBOL = '#'
  const SPACE = ' '

  for (let m = 1; m <= n; m++) {
    let row = ''

    if (m > 0) {
      for (let sp = 0; sp < (n - m); sp++) {
        row += SPACE
      }
    }

    for (let i = m; i > 0; i--) {
      row += SYMBOL
    }
    console.log(row)
  }
}


staircase(6)
staircase(4)
staircase(34)
staircase(14)
staircase(44)