/** Given two strings, determine if they share a common substring. A substring may be as small as one character.
* For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.
* For each pair of strings, return YES or NO.
*
* Sample Input 
* hello
* world
*
* hi
* world
*
* Sample Output
* YES
* NO
*/

function twoStrings(s1, s2) {
  let res = 'NO';

  for (var i = 0; i < s1.length; ++i) {
    if (s2.includes(s1[i])) {
      res = 'YES';
    }
  }
  return res;
}

console.log(twoStrings('hello', 'world'));
console.log(twoStrings('hi', 'world'));
