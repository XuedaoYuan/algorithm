/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.


Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")())())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s) return 0;
  if (s.length === 1) return 0;
  let max = 0;
  const stack = [];
  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i];
    if (char === '(') {
      stack.push(char);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === '(') {
        max += 2;
        stack.pop();
      }
    }
  }
  return max;
};

console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses('()(())'));
console.log(longestValidParentheses('()(()'));
