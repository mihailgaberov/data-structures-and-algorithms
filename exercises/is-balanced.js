/**
 * Check if a given string of brackets is balanced, 
 * i.e. there are as many opening brackets as the closing ones, e.g. ((()))
*/

function isBalanced(str) {
  let result = true
  let stack = [];
  
	for (let prop in str) {
    const char = str[prop]

		if (['(', '['].includes(char)) {
			stack.push(char)
		} else {
      if (stack.length === 0) result = false

      const top = stack.pop()
    
      if ((top === '[' && char != ']') || (top === '(' && char != ')')) {
        result = false
      }
    }
  }
  
  return result
}

console.log(isBalanced('[]') === true)
console.log(isBalanced('()[]()' === true))
console.log(isBalanced('[](())(]') === false)
console.log(isBalanced('((([])))[[[()]]]') === true)
